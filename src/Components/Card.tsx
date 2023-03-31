import './Card.scss'

type card = {
    title: string
    content: string
    button_text: string
    button_href: string
}

type props = {
    card: card
}

export default function Card(props: props) {

    const { title, content, button_text, button_href } = props.card

    return (
        <div className='card'>
            <h2>{title}</h2>
            <div>{content}</div>
            <a href={button_href} target="_blank">
                <button>{button_text}</button>
            </a>
        </div>
    )
}
