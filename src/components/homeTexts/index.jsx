import HomeText1 from "./HomeText1"
import HomeText2 from "./HomeText2"
import HomeText3 from "./HomeText3"

const HomeTexts = () => {
    return (
        <>
            <HomeText1 className="flex justify-content-center mb-5" />
            <div className="flex gap-1 text-100 mb-5">
                <HomeText2 />
                <HomeText3 />
            </div>
        </>
    );
};

export default HomeTexts;
