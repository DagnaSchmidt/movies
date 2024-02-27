//components
import H3 from "../../texts/h3";
import SingleMovieDetailsListItem from "../movies/singleMovieDetailsListItem";

//types
import { TSinglePersonProps } from "../../../types/Peoples";

export default function SingleCharacterDetails(props: TSinglePersonProps) {
    const { birthday, gender, known_for_department, place_of_birth } = props;

    const genderToString = (gender: number) => {
        if (gender === 0) {
            return 'not specified';
        } else if (gender === 1) {
            return 'female';
        } else if (gender === 2) {
            return 'male';
        } else {
            return 'non-binary';
        }
    };

    const data = [
        {
            border: true,
            title: 'Birthday:',
            text: birthday
        },
        {
            border: true,
            title: 'Place of birth:',
            text: place_of_birth
        },
        {
            border: true,
            title: 'Gender:',
            text: genderToString(gender)
        },
        {
            border: false,
            title: 'Known from department:',
            text: known_for_department
        }
    ]

    return (
        <section className="w-full flex flex-col gap-4 px-4">
            <H3 title="Details" />
            <ul className="bg-extra-light pl-4 rounded-lg flex flex-col gap-2">
                {
                    data.map(i => <SingleMovieDetailsListItem {...i} key={i.title} />)
                }
            </ul>
        </section>
    )
};
