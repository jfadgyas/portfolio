
const PostForm = async (subjects, setStatus) => {
    setStatus({result: 'sending', message: 'Sending...'})

    const data = new FormData(document.forms[0])
    const message = Object.fromEntries(data)

    // Check subject field for robots
    if (!subjects.includes(message.subject)){
        if (message.subject) return console.log('Robots are not allowed to message')
        message.subject = 'SITE'              
    }
    
    const options = {
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(message)
    }

    try{
        const res = await fetch('https://iridescent-puffpuff-8238c3.netlify.app/api/message', options).then(res => res.json())
        console.log(res)
        setStatus({result: res.msgType, message: res.message})
    }
    catch(err){
        console.log(err)
        setStatus({result: 'error', message: err.message})
    }
    
    // if everythings oke, refresh site
    return 
}

export default PostForm