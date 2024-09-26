import Statics from '../.././components/dashboard/Statics';
import UserStatistics from '../.././components/dashboard/UserStatistics';
function MainDash() {

    return (
        <>
        <div className="row">
            <Statics/>
            <Statics/>
            <Statics/>
            <Statics/>
        </div>

    <UserStatistics/>
        </>
)
    ;
}

export default MainDash;