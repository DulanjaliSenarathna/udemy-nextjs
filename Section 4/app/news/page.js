import Link from "next/link";

export default function NewsPage(){
    return <>
    <h1>News Page</h1>
    <ul>
        <li>
            <Link href='/news/first-news'>News 1</Link>
        </li>
        <li>
            <Link href='/news/second-news'>News 2</Link>
        </li>
        <li>
            <Link href='/news/third-news'>News 3</Link>
        </li>
    </ul>
    </>
    
}