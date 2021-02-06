


const TheirMessage = ({lastMessage, message}) => {

    const isFirstMessageBeUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    
    return (
        <div className='message-row'>
            {isFirstMessageBeUser && (
                <div 
                    className='message-avatar'
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}

            {
                message?.attachments?.length > 0 
                    ? ( 
                        <img src={message.attachments[0].file} 
                             alt='message-attachments' 
                             className='message-image' 
                             style={{ marginLeft: isFirstMessageBeUser ? '4px' : '48px' }} /> 
                      ) 
                    : ( 
                        <div className='message' style={{ float: 'left', backgroundColor: '#482A6E', color: 'white', marginLeft: isFirstMessageBeUser ? '4px' : '48px' }}>
                            {message.text}
                        </div> 
                      )
            }
        </div>
    )
}

export default TheirMessage