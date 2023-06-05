// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const PROJECT_ID = "ca158c8e-7147-42c2-ad15-950d6c1ad5c4";


export default function ChatsPage(props) {
    // const chatProps = useMultiChatLogic(
    //     'ca158c8e-7147-42c2-ad15-950d6c1ad5c4',
    //     props.user.username,
    //     props.user.secret
    // );
    // return (
    //     <div className='h-[100vh]'>
    //         <MultiChatSocket {...chatProps} />
    //         <MultiChatWindow  {...chatProps} style={{ height: '100vh' }} />
    //     </div>
    // )
    return (
        <div className='h-[100vh]'>
            <PrettyChatWindow
                projectId={PROJECT_ID}
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );
}
