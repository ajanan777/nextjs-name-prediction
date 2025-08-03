const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json()
};

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    return res.json()
};


const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`);
    return res.json()
};


interface Params {
    params: { name: string};
}

export default async function Page({ params }: Params) {
    const { name } = await params;
    const ageData = getPredictedAge(name);
    const genderData = getPredictedGender(name);
    const countryData = getPredictedCountry(name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
    
    return (
        <div>
            <div>
                <div> Personal Info:</div>
                <div> Age: {age?.age} </div>
                <div> Gender: {gender?.gender} </div>
                <div> Country: {country?.country[0]?.country_id} </div>
            </div>
        </div>
    );
}