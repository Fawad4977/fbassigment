
import FbImageLibrary from 'react-fb-image-grid'

function Gallery(props){

    return (
        <FbImageLibrary images={props.images}/>
    )

}
export default Gallery;