import React from 'react';
import "bootstrap/dist/css/bootstrap.css"

export default function Contacts(props) {

    return (
        <div className="jumbotron" style={{backgroundColor: "white", padding: "10px"}}>
            <h1 className="display-4">Всем привет</h1>
                <p className="lead">Благодарим за посещение нашего сайта про мемы, вы лучшие!</p>
                    <hr className="my-4" />
                <p>Создатель сайта:</p>
                <h4>Калинин Евгений Валерьевич</h4>
                <ul>
                    <li>ujinval@yandex.ru</li>
                    <li><a target="_blank" href="https://vk.com/eugene_programmist" >Вконтакте</a></li>
                    <li><a target="_blank" href="https://instagram.com/eugene_programmist" >Instagram</a></li>
                    <li><a target="_blank" href="https://t.me/asalgon7" >Telegram</a></li>
                </ul>
                <p>
                    Пока что сайт довольно скудный, тут даже нельзя сделать новые посты), но на то есть причина.<br/>Я учусь на 1 курсе ННГУ ИТММ и в данный момент у меня проходит летняя сессия,
                    а так как я собираюсь зафармить себе всю их стипению, мне нужно сдавать ссесии на 5 и времени на сайт не очень много. &#128532;<br/>Но я стараюсь заниматься им всегда, когда
                    у меня есть свободное время, ведь материал, который мы проходим на курсах действительно интерестный.<br/>Внимание<br/>Спасибо за внимание<br/>&#129505;
                </p>
                <br/><h4>PS</h4>
                <p>
                    Что касается сайта, я понимаю, что на нем нужно добавить форму для создания поста (которая будет доступна только пользователям) [на сервере уже есть рут для этого и можно докидывать новые посты вручную через постмэна], лайки сейчас это просто случайные числа и они никак не связаны с сервером, а еще выглядят стремно, я их добавил просто как декорацию). Комментарии тоже можно реализовать, хотя мне они кажутся не совсем уместными здесь. При логине запросы к серверу не ассинхронные, и это тоже нужно исправить, реализовать их аналогично запросу на список пользователей и список постов. На данный момент нет возвожности редактирвать ствою страницу и данных пользователя фактически никаких нет. Также стили я применял из бутстрапа, поэтому мелкие доработки стилей я вставлял напрямую в jsx теги, хоть я и знаю, что это не хорошо, но содержимого там мало и решил пока оставить так, хотя надо было бы хотя бы вынести их в отдельный объект. Еще я не стал добавлять redux там, где стэйты используются только на собственной странице, пока только данные пользователя используются в большом количестве компонентов<br/>Я знаю как все это нужно сделать, но, к сожалению у меня не хватает времени, но после сессии я планирую для себя доделать сайт до приемлемго уровня.
                </p>
        </div>
    )
}
