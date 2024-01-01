import { useEffect, useState } from "react";
import faqimg from "../../../assets/faq/faq for twelve.avif";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";


const FrequentlyAskedQuestion = () => {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch("/faq.json")
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);


    return (
        <>
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Frequently Asked Questions (FAQs)</h1>
                <h2 className="font-bold text-3xl text-gray-800">Everything You Need to Know About Our Engaging and Educational Summer Camp Programs.</h2>
            </div>
            <div className="dark:bg-gray-800 mb-10 px-6 py-1">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="grid divide-y divide-neutral-200 max-w-2xl mt-4">
                        {faq.map((n, index) => (
                            <div
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="2000"
                                data-aos-offset="200"
                                className="py-5"
                                key={index}
                            >
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                                        <span>
                                            <strong className="text-3xl">Q.</strong>
                                            {n.headline}
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="dark:text-neutral-400 text-neutral-700 mt-3 group-open:animate-fadeIn">
                                        <strong className="text-2xl">A. </strong>
                                        {n.answer}
                                    </p>
                                </details>
                            </div>
                        ))}
                    </div>
                    <div className="ps-2">
                        <img data-aos="fade-down" className="w-[7000px] pt-14 rounded-xl" src={faqimg} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
                    className="m-3 text-center text-2xl text-primary p-2 rounded-full dark:bg-gray-200 bg-gray-800"
                >
                    <FaRegArrowAltCircleUp></FaRegArrowAltCircleUp>
                </button>
            </div>
        </>
    );
};

export default FrequentlyAskedQuestion;