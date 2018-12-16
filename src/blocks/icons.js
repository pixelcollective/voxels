/**
 * voxels
 * Premium ultra-fine iconic iconery
 *
 */
export const BrowserLayoutIcon = () => {
  return (
    <svg className="dashicon dashicons-grid-view" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
      <path fill="#444444" d="M45,45H3c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v38C47,44.105,46.105,45,45,45z "/>
      <rect x="3" y="10" fill="#FFFFFF" width="42" height="33"/>
      <path fill="#B3B3B3" d="M41,21H7c-0.553,0-1-0.448-1-1v-6c0-0.552,0.447-1,1-1h34c0.553,0,1,0.448,1,1v6C42,20.552,41.553,21,41,21z M8,19h32v-4H8V19z"/>
      <path fill="#B3B3B3" d="M13,40H7c-0.553,0-1-0.448-1-1V25c0-0.552,0.447-1,1-1h6c0.553,0,1,0.448,1,1v14C14,39.552,13.553,40,13,40z M8,38h4V26H8V38z"/>
      <path fill="#B3B3B3" d="M40,40H18c-0.553,0-1-0.448-1-1V25c0-0.552,0.447-1,1-1h22c0.553,0,1,0.448,1,1v14 C41,39.552,40.553,40,40,40z M19,38h20V26H19V38z"/>
      <circle fill="#E86C60" cx="4.5" cy="6.5" r="1.5"/>
      <circle fill="#EFD358" cx="9.5" cy="6.5" r="1.5"/>
      <circle fill="#72C472" cx="14.5" cy="6.5" r="1.5"/>
    </svg>
  )
}

export const CardIcon = () => {
  return (
    <svg className="dashicon dashicons-grid-view" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <rect x="2" y="2" width="40" height="48" fill="none" stroke-width="2" stroke="#000" stroke-miterlimit="10"/>
      <polyline points="46.003 16.672 60.852 20.646 49.992 61.218 15.216 51.91" fill="none" stroke-miterlimit="10" stroke="#000" />
    </svg>
  )
}


export const NotificationIcon = () => {
  return (
    <svg  className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20">
      <path fill="none" stroke="#000" d="M512 96c-111.118 0-215.584 43.272-294.156 121.844S96 400.882 96 512s43.272 215.584 121.844 294.156S400.882 928 512 928s215.584-43.272 294.156-121.844S928 623.118 928 512s-43.272-215.584-121.843-294.156S623.118 96 512 96zm0-96c282.77 0 512 229.23 512 512s-229.23 512-512 512S0 794.77 0 512 229.23 0 512 0zm-64 704h128v128H448zm0-512h128v384H448z" />
    </svg>
  )
}

export const ButtonIcon = () => {
  return (
    <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" >
      <path fill="none" stroke="#000" d="M0,5.1v9.8h20V5.1H0z M17.8,12.7H2.2V7.3h15.5V12.7z"/>
    </svg>
  )
}

export const DividerIcon = () => {
  return <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
      <path fill="none" stroke="#000" d="M4 9h12v2H4V9z"></path>
    </svg>
}

export const TwitterIcon = (props) => {
  return <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width={props.width ? props.width : 20} height={props.height ? props.height : 20} >
      <path fill={props.color ? props.color : "#fff"} d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" />
    </svg>;
}
