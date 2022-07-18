import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="106" cy="106" r="90" />
        <rect x="12" y="217" rx="10" ry="10" width="195" height="22" />
        <rect x="5" y="266" rx="0" ry="0" width="195" height="59" />
        <rect x="7" y="344" rx="0" ry="0" width="130" height="23" />
        <rect x="150" y="344" rx="0" ry="0" width="74" height="26" />
    </ContentLoader>
)

export default MyLoader

