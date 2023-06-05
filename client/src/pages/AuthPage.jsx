import axios from 'axios';

export default function AuthPage({ onAuth }) {

    const handleSubit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('http://localhost:8080/authenticate', {
            username: value
        }).then(res => onAuth({ ...res.data, secret: value }))
            .catch(e => console.log('error', e));
    };

    return (
        <div className="flex h-[100vh] items-center ml-64">
            <form className="w-[50%] max-w-[350px]" onSubmit={handleSubit}>
                <h1 className="text-7xl text-yellow-100 text font-medium tracking-wider">Welcome</h1>

                <div className="mt-3 mb-7 text-md font-medium tracking-wider text-[#afafaf]">Set a username to get started</div>

                <div className="flex flex-col">
                    <div className="relative">
                        <label htmlFor='username' className="absolute text-[12px] text-[#000] z-10 top-1 left-4 font-bold">Username</label>
                        <input type='text' id='username' className="rounded-md text-white px-3 py-5 bg-gray-600 outline-none border-none w-[calc(100%-12px-12px)] mb-4" />
                    </div>
                    <button type='submit' className="text-[#303841] font-medium text-[20px] rounded-md bg-[#FFE700] px-3 py-4 w-[calc(100%-12px-12px)]">Start Chatting</button>
                </div>
            </form>
        </div>
    )
}
