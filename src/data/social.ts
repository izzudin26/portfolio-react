import github from '../assets/github-whitte.svg'
import linkedin from '../assets/linkedin-white.svg'
import mail from '../assets/gmail-white.svg'

export type TSocial = {
    icon: string
    url: string
}

export const socials: TSocial[] = [
    {
        icon: github,
        url: 'https://github.com/izzudin26'
    },
    {
        icon: linkedin,
        url: 'https://www.linkedin.com/in/izzudin-ar-rafiq-0640101b5/'
    },
    {
        icon: mail,
        url: 'mailto:izzudin.ar26@gmail.com'
    }
]