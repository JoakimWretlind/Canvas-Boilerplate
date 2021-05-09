import React, { useState, useEffect, useRef } from "react"
import { CanvasSubject } from './MyCanvas.elements'
import BackgroundImage from '../images/Fire.png'

const MyCanvas = () => {
    const [image, setImage] = useState(null)
    const canvas = useRef(null)

    useEffect(() => {
        const myImage = new Image()
        myImage.src = BackgroundImage
        myImage.onload = () => setImage(myImage)
    }, [])

    useEffect(() => {
        if (image && canvas) {
            const ctx = canvas.current.getContext('2d')
            ctx.drawImage(image, 0, 0, 350, 425)
        }
    }, [image, canvas])

    return (
        <>
            <CanvasSubject>
                <canvas
                    ref={canvas}
                    width={348}
                    height={423}
                />
            </CanvasSubject>
        </>
    )
}

export default MyCanvas
