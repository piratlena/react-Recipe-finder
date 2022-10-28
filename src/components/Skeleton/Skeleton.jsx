import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
    return (
      <ContentLoader 
    speed={3}
    width={400}
    height={88}
    viewBox="0 0 400 88"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}
  >
    <circle cx="60" cy="46" r="29" /> 
    <rect x="107" y="21" rx="8" ry="8" width="250" height="23" /> 
    <rect x="109" y="59" rx="8" ry="8" width="194" height="18" />
  </ContentLoader>
    )
}
export default Skeleton;