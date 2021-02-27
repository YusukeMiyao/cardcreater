import { profile } from 'console';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GitHUB_CLIENT,
            clientSecre:process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENt,
            clientSecret:process.env.GOOGLE_SECRET
        }),
    ],
    session: {
        jwt:true,
    },
    callbacks: {
        sessiion: async (session, user) => {
            return Promise.resolve(user)
        },
        jwt: async (token, user, account, profile) => {
            if (account) { token.provider = account.provider }
            if (profile) { token.profile = profile }
            return Promise.resolve(token)
        },
    },
}

export default (req, res) => NextAuth(req, res, options);