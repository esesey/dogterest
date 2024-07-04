import { useState } from "react"

const Dog = ({dog}) => {
    const [likes, setLikes] = useState(Math.floor(Math.random()*501))
    const [isLiked, setIsLiked] = useState(false)
    const [buttonColor, setButtonColor] = useState('gray')
    const isVID = dog.toLowerCase().endsWith('mp4')

    const getLike = () => {
        setLikes(likes + 1)
        setIsLiked(true)
        setButtonColor('red')
    }
    const removeLike = () => {
        setLikes(likes - 1)
        setIsLiked(false)
        setButtonColor('gray')
    }
    const handleLikeButtonPress = () => {
        if (!isLiked) getLike()
        else removeLike()
    }
    if (isVID) {
    return (
        <div className="dog">
            <video className="dogVID" autoPlay loop muted>
                <source src={`https://random.dog/${dog}`}/>
            </video>
            <div>
                <button style={{color:buttonColor}} onClick={handleLikeButtonPress}>❤</button>
                <t>{likes}</t>
            </div>
        </div>
    )}
    return(
        <div className="dog">
            <img src={`https://random.dog/${dog}`} className="dogIMG"></img>
            <div>
            <button style={{color:buttonColor}} onClick={handleLikeButtonPress}>❤</button>
                <t>{likes}</t>
            </div>
        </div>
    )
}

export default Dog