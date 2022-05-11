
interface IPicProps{
    id:string,
    className:string
}
const Pic:React.FC<IPicProps> = ({id, className}) => {
    const elem = require( `../../resources/pics/doctors/${id}`);
    return(
        <img src={elem} alt={`img-${id}`} className={className} />
    );
}
export default Pic;