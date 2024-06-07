import styles from "../styles/email.module.css"
import EmailCategory from "./emailCategory"

export default function Emails() {
 
    // let {}= styles
    const emails =[
        {"expeditor": "Code pen", "messageTitle": "Holiday Special!", "message": "In tempor, ex a venenatis ullamcorper, magna nunc sodales quam, ac ullamcorper sem ex vitae tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", "timeStamp": "11:00am"},

        {"expeditor": "Ebere Agu", "messageTitle": "Holiday Special!", "message": "Donec consequat commodo felis, non ultricies mi egestas sed. Vivamus bibendum mauris at lectus placerat mollis. Quisque facilisis dui quis ipsum tincidunt congue. Morbi vitae ornare ipsum. Donec ornare leo ac est condimentum aliquet.", "timeStamp": "12:00am"},

        {"expeditor": "VIctor Iroka", "messageTitle": "Holiday Special!", "message": "Aenean viverra eu purus id lobortis. Vestibulum placerat, massa quis porttitor efficitur, urna massa consequat erat, id mattis ex arcu non nulla. Integer scelerisque, urna id aliquam tincidunt, ante risus pellentesque ipsum, ut semper nulla lacus sit amet magna. Donec vestibulum nibh in mi suscipit vulputate.", "timeStamp": "1:00am"},

        {"expeditor": "Angela Escoba", "messageTitle": "Holiday Special!", "message": "Nullam tincidunt dapibus placerat. In tempor quam nec mauris facilisis posuere. Integer tincidunt enim vel nibh mollis finibus. Vivamus non lacus eu ex tincidunt pretium. Suspendisse a elementum urna, ac commodo felis. Nulla ac lectus non erat dictum tempus. ", "timeStamp": "2:00am"},

        {"expeditor": "Cynosure Enyinnaya", "messageTitle": "Holiday Special!", "message": "Donec sodales mi et mollis consequat. Integer at fermentum neque. Donec sed erat arcu. Vestibulum fringilla consequat turpis, posuere laoreet lectus lobortis at. Nullam pharetra ullamcorper quam, quis varius neque. Praesent eget varius ante, quis consectetur nisi.", "timeStamp": "3:00am"},



    ]
  return (
    <div>
      {emails.map((emails,i)=><EmailCategory key={i} expeditor={emails.expeditor} messageTitle={emails.messageTitle} message={emails.message} timeStamp={emails.timeStamp}/>)}
    </div>
  )
}
