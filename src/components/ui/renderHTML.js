import DOMPurify from 'dompurify';

export default function RenderHTML({ htmlContent }) {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);

    return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    );
};