import "../styles/ImageWrapper.css";

export default function ImageWrapper({ img, alt }) {
    return (
        <div className="imgWrapper">
            <img src={img} alt={alt} />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="672"
                height="768"
                viewBox="0 0 672 768"
                fill="none"
            >
                <path
                    d="M655.5 760C655.5 764.418 659.082 768 663.5 768C667.918 768 671.5 764.418 671.5 760C671.5 755.582 667.918 752 663.5 752C659.082 752 655.5 755.582 655.5 760ZM0 0V701H3V0H0ZM60.5 761.5H663.5V758.5H60.5V761.5ZM0 701C0 734.413 27.0868 761.5 60.5 761.5V758.5C28.7436 758.5 3 732.756 3 701H0Z"
                    fill="#478DF5"
                />
            </svg>
        </div>
    );
}
