import PropTypes from "prop-types";
import './YoutubeEmbed.css'

const YoutubeEmbed = ({embedID}) => (
    <div className="vid-frame">
        <iframe width="794" height="447" src="https://youtu.be/xNRJwmlRBNU" title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
)

export default YoutubeEmbed;
