import Tooltip from "../tooltip/page";

export default function NewEmail() {

  return (
    <div className="shadow-lg bg-white rounded-md p-2 flex flex-col ring-1 ring-black ring-opacity-5">
    <div className="flex justify-center items-center">
      <p className="text-gray-400 justify-center mr-2 ">To:</p>
      <input type="text" className="w-full  outline-none  placeholder:text-gray-400 "/>
    </div>
    <div className="flex justify-center items-center mt-1">
      <p className="text-gray-400 justify-center mr-2">Cc:</p>
      <input type="text" className="w-full  outline-none  placeholder:text-gray-400 "/>
    </div>
    <input type="text" className="w-full  outline-none placeholder:text-gray-400 border-b mt-4 mb-2" placeholder="Add a subject"/>
    <textarea rows="2" name="description" id="description" className="outline-none block w-full mb-5 min-h-40 border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Email content ... "></textarea>

    <div className="">
      <a className="hover:cursor-pointer ">
        <span className="float-right">
        <Tooltip message="Send" action={() => alert("Email sent")}>
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        </Tooltip>
        </span>
      </a>
    </div>
    </div>
  );

}
