import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 
            'What country\'s flag is this',
        imgSrc: "https://cdn.britannica.com/73/6073-050-4D6FDAF6/Flag-Austria.jpg",
        answer: 'Austria',
    },
    {
        points: 200,
        question:
            'What school\'s emblem is this?',
        imgSrc: "https://world-schools.com/wp-content/uploads/2023/03/dwight-global-logo-200x200-1.webp",
        answer: 'Dwight',
    },
    {
        points: 300,
        question:
            'What mountain is this?',
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mount_Sinai_from_the_southwest.jpg/1200px-Mount_Sinai_from_the_southwest.jpg",
        answer: 'Mount Sinai',
    },
    {
        points: 400,
        question: 'Who won the 2025 Four Nations Hockey Tournament?',
        answer: 'Canada',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What is the NFL team in the AFC North with Purple as its primary color?',
            imgSrc: 'https://yt3.googleusercontent.com/w1Z-Dn0Xuzd4gpBs9YDFY6jIiiE_Uw2lBfthEQthSnTt1UcWsUGYpqmFjuvR6GLG1yQEsY7Y=s900-c-k-c0x00ffffff-no-rj',
            answer: 'Ravens || Baltimore Ravens',
        },
        {
            points: 100,
            question:
                'I am 15!/87178291200 years old. How old am I?',
            answer: '15',
        },
        {
            points: 300,
            question: 'What programming language is the below code?',
            imgSrc: '/programming_language.png',
            answer: 'Javascript',
        },
        {
            points: 400,
            question:
                'What type of plane is this?',
            imgSrc:
                "https://vegasaviation.com/wp-content/uploads/2024/04/cessna.jpg",
            answer: 'Cessna 172',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
]);


const categories = [
    {
        title: 'My Past',
        questions: pastQuestions
    },
    {
        title: 'My Present',
        questions: presentQuestions
    },
    {
        title: 'My Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}