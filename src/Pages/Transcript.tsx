import { useEffect } from "react";
import  { useNavigate } from 'react-router-dom'

function Transcript() {

  const navigate = useNavigate();

  function onPageLoad() {
    navigate(require("../Assets/SSR_TSRPT.pdf"), {replace: true});
    navigate(0);
  }

  useEffect(() => {
    onPageLoad();
  })

  return (
    <>
    </>
  )
}

export default Transcript