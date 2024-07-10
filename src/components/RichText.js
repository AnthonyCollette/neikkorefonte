import { render } from 'storyblok-rich-text-react-renderer';

const RichText = ({ richtext }) => {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <div className='rich-text'>{render(richtext)}</div>;
}

export default RichText;