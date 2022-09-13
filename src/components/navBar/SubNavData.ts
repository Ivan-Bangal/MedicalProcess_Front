import { Inbox } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';

type SubNavType = {
    href: string,
    icon: JSX.Element,
    text: string
}

export const subNavItem = [
    {
        href: '/Pacientes',
        text: 'PACIENTES',
        icon : typeof Mail,

    },
    {
        href: '/Processos',
        text: 'PROCESSOS',
        icon : typeof Inbox ,

    },
]