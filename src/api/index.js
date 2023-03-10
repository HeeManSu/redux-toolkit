import Chance from "chance";

const chance = Chance();


const fakeuseData = () => {
    // console.log(chance.name({middle: true}))

    return chance.name({middle: true})
}

export default fakeuseData;