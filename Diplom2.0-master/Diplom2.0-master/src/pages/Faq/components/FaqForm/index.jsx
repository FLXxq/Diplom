import * as React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import photo1 from '../../photo/Arni.jpg'
import photo2 from '../../photo/Hardi.jpg'
import photo3 from '../../photo/Jason.jpg'
import photo4 from '../../photo/Dwayne.jpg'
import photo5 from '../../photo/Gigi.jpg'
import photo6 from '../../photo/Gisele.jpg'
import {Grid} from "@mui/material";
import './style.css'
import {useState} from "react";
import MyCard from "./Card";
import Button from "@mui/material/Button";

const initialStateDialog = {
    open: false,
    title: '',
    photo: null,
    description: '',
}

const FaqForms = () => {
    const [dialogData, setDialogData] = useState(initialStateDialog);
    const data = [
        {
            name: "Арнольд Шварценеггер",
            description: "Прославился, благодрая своей актерской игре и спортивному телосложению.",
            photo: photo1,
            fullDescription: 'Арнольд Шварценеггер\n' +
                'Самый лучший из австрийцев за свою спортивную карьеру достиг невиданных высот. «Мистер Олимпия», «Мистер Вселенная», а после – успехи в кино и на политической арене – всего этого он достиг своим трудом. Но началось всё со спорта'
        },
        {
            name: "Том Харди",
            description: "Выдающийся актер, который ответственно подходит к своим ролям и как он должен физически на них выглядеть.",
            photo: photo2,
            fullDescription: '40-летний актер также начал с модельной карьеры. Качком он стал во время подготовки к съемкам фильма «Темный рыцарь: Возрождение», где сыграл массивного Бейна. Для роли ему пришлось  не просто нарастить мышечную массу, но и наработать настоящую силу. '
        },
        {
            name: "Джейсон Стэйтем ",
            description: "Один из лучших голивудских актеров, с отличной спортивной формой.",
            photo: photo3,
            fullDescription: '«Я не хожу во все эти богатые залы с современными тренажерами», — говорит Джейсон Стэйтем и не врет. Он любит спорт с детства — его отец Барри увлекался единоборствами и практически с пеленок занимается боевыми искусствами. Хорошая физическая форма определила карьеру будущей голливудской звезды — в 1990-е Стэйтем подписал первый контракт с модным агентством и стал лицом бренда Tommy Hilfiger. Так уж вышло, что владелец бренда занялся продюсированием фильма Гая Риччи «Карты, деньги, два ствола» и порекомендовал кандидатуру Стэйтема на одну из главных ролей. Кастинг он прошел и с тех пор является одним из близких друзей Риччи, вместе они занимаются бразильским джиу-джитсу. '
        },
        {
            name: "Дуэйн Джонсон",
            description: "Американский киноактёр, спортсмен, в прошлом — рестлер.",
            photo: photo4,
            fullDescription: 'Дуэйн называет тренировки метафорой жизни, с помощью которой человек учится управлять собственной жизнью. Силовая работа — не просто нагрузка, а закаливание силы воли, духа и характера. Его считают одним из величайших рестлеров всех времен, до начала актёрской карьеры он восемь лет выступал в WWE. Его фильмы собрали более 3,5 миллиардов долларов в Северной Америке и более 10,5 миллиардов долларов по всему миру, что делает его одним из самых кассовых и высокооплачиваемых актеров в мир'
        },
        {
            name: "Джиджи Хадид",
            description: "Модель арабо-голландского происхождения, одна из самых высокооплачиваемых моделей мира.",
            photo: photo5,
            fullDescription: 'Является лицом нескольких линий Tom Ford, моделью Victoria’s Secret, снялась для календаря Pirelli 2015 года. Названа Международной моделью на церемонии Fashion Awards 2016 года.'
        },
        {
            name: "Жизель Бундхен",
            description: "Бразильская супермодель и актриса.",
            photo: photo6,
            fullDescription: 'С 2004 по 2013 год являлась самой высокооплачиваемой моделью в мире.Также известна как одна из бывших ангелов "Victoria Secret". В апреле 2015 года Бюндхен объявила о завершении карьеры модели. Попала в Книгу рекордов Гиннесса'
        },
    ]

    const handleCloseDialog = () => {
        setDialogData(initialStateDialog)
    }

    const handleOpenDialog = (data) => {
        setDialogData({
            open: true,
            ...data,
        })
    }

    return (
        <div className='faq-form'>
            <Grid className="grid-style" container>
                {data.map(value => {
                        return (
                            <Grid item>
                                <MyCard onClickCard={handleOpenDialog} data={value} />
                            </Grid>
                        )
                    }
                )
                }
            </Grid>
            <Dialog onClose={handleCloseDialog} open={dialogData.open}>
                <DialogTitle>
                    {dialogData.title}
                </DialogTitle>
                <DialogContent>
                    <MyCard data={{
                        photo: dialogData.photo,
                        description: dialogData.description,
                    }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} variant="contained">Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FaqForms;