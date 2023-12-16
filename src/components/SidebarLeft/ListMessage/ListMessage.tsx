import classNames from 'classnames/bind'
import { Scrollbars } from 'react-custom-scrollbars-2'

import ListMessageStyle from './ListMessage.module.scss'
import MessageItem from './MessageItem'
// import { UIEventHandler, useCallback, useEffect, useState } from 'react'
// import { LoremIpsum } from 'lorem-ipsum'

const cx = classNames.bind(ListMessageStyle)

// export class Article {
//     title: string
//     author: string
//     content: string

//     constructor(title: string, author: string, content: string) {
//         this.title = title
//         this.author = author
//         this.content = content
//     }
// }

// function generateRandomArticle(): Article {
//     const title = new LoremIpsum().generateWords()
//     const author = new LoremIpsum().generateParagraphs(40)
//     const content = new LoremIpsum().generateParagraphs(40)
//     const article: Article = new Article(title, author, content)
//     return article
// }

export default function ListMessage() {
    /*
    const [offset] = useState(30)
    const [message, setMessage] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(message)
    }, [message])

    useEffect(() => {

        const arrayArticle: Article[] = []

        for (let index = 0; offset < 10; index++) {
            arrayArticle.push(generateRandomArticle())
        }

        setMessage((prev) => {
            return [...prev, generateRandomArticle()]
        })
    }, [offset])

    useEffect(() => {
        const arrayArticle: Article[] = []
        for (let index = 0; index < 10; index++) {
            arrayArticle.push(generateRandomArticle())
        }

        setMessage(arrayArticle)
    }, [])

    
    const handleScroll: UIEventHandler = useCallback(
        (event) => {
            const values = {
                top: event.currentTarget.scrollTop,
                left: event.currentTarget.scrollLeft,
                scrollTop: event.currentTarget.scrollTop,
                scrollLeft: event.currentTarget.scrollLeft,
                scrollHeight: event.currentTarget.scrollHeight,
                scrollWidth: event.currentTarget.scrollWidth,
                clientHeight: event.currentTarget.clientHeight,
                clientWidth: event.currentTarget.clientWidth
            }

            if (values.top >= 1 && !isLoading) {
                setIsLoading(true)
                /*
                setOffset((prev) => {
                    if (prev <= 100) {
                        return prev + prev
                    } else {
                        return prev
                    }
                })
                setIsLoading(false)
            }
        },
        [isLoading]
    )
*/

    return (
        <Scrollbars
            // onScroll={handleScroll}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            thumbMinSize={12}
            width={'100%'}
            className='scrollbar'
            universal={true}
        >
            <div className={cx('list-message')}>
                {Array(10)
                    .fill(0)
                    .map((_, index) => {
                        return <MessageItem key={index} />
                    })}
            </div>
        </Scrollbars>
    )
}
