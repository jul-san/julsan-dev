interface JobProps {
    title: string,
    company: string
}

const Job: React.FC<JobProps> = ({title, company}) => {
    return (
    <>
        <p className='text-gray-500 text-sm'>{title}</p>
        <p className='pb-2'>{company}</p>
    </>
    );
};

export default Job;