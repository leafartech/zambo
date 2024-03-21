export default function Line() {
    return (
        <div className="py-6 sm:py-12 border-y border-orange w-full flex justify-center bg-[#16110b] px-4 sm:px-0">
            <ul className="flex justify-between sm:items-center sm:flex-row flex-col gap-4 sm:gap-0 w-full sm:max-w-6xl">
                <li className="flex gap-2 items-center text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 2.5L2.5 8.75L15 15L27.5 8.75L15 2.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.5 21.25L15 27.5L27.5 21.25" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" stroke-linejoin="round"></path><path d="M2.5 15L15 21.25L27.5 15" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>+ 120 módulos</span>
                </li>
                <li className="flex gap-2 items-center text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.5 10L20 15L12.5 20V10Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>+ 1.000 AULAS GRAVADAS</span>
                </li>
                <li className="flex gap-2 items-center text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M7.5 17.5L9.3125 13.875C9.52121 13.4608 9.84101 13.1129 10.2362 12.87C10.6313 12.6272 11.0862 12.4991 11.55 12.5H25M25 12.5C25.3819 12.4993 25.7589 12.5862 26.102 12.7539C26.4452 12.9215 26.7453 13.1656 26.9795 13.4673C27.2136 13.7691 27.3755 14.1204 27.4527 14.4944C27.53 14.8685 27.5205 15.2552 27.425 15.625L25.4875 23.125C25.3488 23.6624 25.0351 24.1383 24.5961 24.4778C24.157 24.8172 23.6175 25.001 23.0625 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V6.25C2.5 4.875 3.625 3.75 5 3.75H9.9125C10.3243 3.75213 10.7291 3.85594 11.0911 4.0522C11.4531 4.24846 11.761 4.5311 11.9875 4.875L13.0125 6.375C13.239 6.7189 13.5469 7.00154 13.9089 7.1978C14.2709 7.39406 14.6757 7.49787 15.0875 7.5H22.5C23.163 7.5 23.7989 7.76339 24.2678 8.23223C24.7366 8.70107 25 9.33696 25 10V12.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>+ 400 MATERIAIS COMPLEMENTARES</span>
                </li>
                <li className="flex gap-2 items-center text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M27.5 12.5V20M27.5 12.5L15 6.25L2.5 12.5L15 18.75L27.5 12.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.5 15V21.25C11.25 25 18.75 25 22.5 21.25V15" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>+ 50 CURSOS</span>
                </li>
            </ul>
        </div>
    )
}