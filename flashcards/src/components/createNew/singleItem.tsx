type Props = { 
    txtareaBgCol: string;
    label: string;
    name: "question" | "answer"; // Ensure only valid names are passed
    entryIndex: number;
    id: number;
    setQuestionsList: React.Dispatch<React.SetStateAction<string[]>>;
    setAnswersList: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SingleItem({ setQuestionsList, setAnswersList, ...props }: Props) {
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;

        if (props.name === "question") {
            setQuestionsList((prev) => {
                const newQuestions = [...prev];
                newQuestions[props.entryIndex] = value;
                return newQuestions;
            });
        } else {
            setAnswersList((prev) => {
                const newAnswers = [...prev];
                newAnswers[props.entryIndex] = value;
                return newAnswers;
            });
        }
    };

    return (
        <div className="flex flex-col gap-2 w-[100%]">
            <textarea
                id={props.id + props.name}
                name={props.name}
                placeholder="Enter text here"
                className={`${props.txtareaBgCol} w-[100%] p-2 rounded-md text-white h-[40px] min-h-[40px] max-h-40`}
                onChange={handleInputChange} // Handle input changes
            />
            <label htmlFor={props.id + props.name}
                className={`text-white text-xl text-center rounded-xl ease-in-out duration-200 cursor-pointer select-none
                ${props.name === "question" ? "w-[62px]" : "w-[134px]"} ${props.txtareaBgCol}`}
            >
                {props.label}
            </label>
        </div>
    );
}
