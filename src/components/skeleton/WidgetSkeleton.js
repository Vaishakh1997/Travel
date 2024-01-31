import React from 'react'
import ContentLoader from 'react-content-loader'

export function WidgetSkeleton(props) {
	return (
		<ContentLoader
			speed={1}
			width={145}
			height={86}
			viewBox="0 0 145 86"
			backgroundColor="#dedede"
			foregroundColor="#c2c2c2"
			{...props}
		>
			<rect x="10" y="20" rx="3" ry="3" width="125" height="14" />
			<rect x="10" y="50" rx="3" ry="3" width="90" height="12" />
			<rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
		</ContentLoader>
	)
}

export function WalletWidgetSkeleton(props) {
	return (
		<ContentLoader
			speed={2}
			width={305}
			height={140}
			viewBox="0 0 305 140"
			backgroundColor="#dedede"
			foregroundColor="#c2c2c2"
			{...props}
		>
			<rect id="Rectangle" x="63" y="11" width="183" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy" x="63" y="31" width="122" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy-2" x="9" y="122" width="73" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy-3" x="9" y="99" width="126" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy-2" x="179" y="122" width="73" height="10" rx="5"></rect>
			<rect id="Rectangle" x="0" y="0" width="51" height="51" rx="25.5"></rect>
			<rect id="Rectangle-Copy-3" x="179" y="99" width="126" height="10" rx="5"></rect>
		</ContentLoader>
	)
}

export function TableSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1137 542"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" x="288" y="0" width="384" height="15" rx="7.5"></rect>
			<rect id="Rectangle-Copy-2" x="899" y="0" width="202" height="15" rx="7.5"></rect>
			<rect id="Rectangle-Copy" x="9" y="0" width="151" height="15" rx="7.5"></rect>
			<rect id="Rectangle-Copy-3" x="9" y="527" width="151" height="15" rx="7.5"></rect>
			<rect id="Rectangle-Copy-4" x="950" y="527" width="151" height="15" rx="7.5"></rect>
			<rect id="Rectangle" x="2" y="36" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-40" x="2" y="88" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-41" x="2" y="146" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-42" x="2" y="197" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-43" x="2" y="246" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-44" x="2" y="294" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-45" x="2" y="347" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-46" x="2" y="395" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-48" x="2" y="446" width="1099" height="3"></rect>
			<rect id="Rectangle-Copy-47" x="2" y="502" width="1099" height="3"></rect>
			<rect id="Rectangle" x="0" y="36" width="2" height="469"></rect>
			<rect id="Rectangle-Copy-49" x="1101" y="36" width="2" height="469"></rect>
			<rect id="Rectangle" x="22" y="112" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-36" x="22" y="61" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-18" x="22" y="315" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-12" x="22" y="213" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-19" x="22" y="416" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-8" x="22" y="163" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-20" x="22" y="366" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-13" x="22" y="264" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-21" x="22" y="467" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-5" x="305" y="112" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-37" x="305" y="61" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-22" x="305" y="315" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-14" x="305" y="213" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-23" x="305" y="416" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-9" x="305" y="163" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-24" x="305" y="366" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-15" x="305" y="264" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-25" x="305" y="467" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-6" x="650" y="112" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-38" x="650" y="61" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-26" x="650" y="315" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-16" x="650" y="213" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-27" x="650" y="416" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-10" x="650" y="163" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-28" x="650" y="366" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-17" x="650" y="264" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-29" x="650" y="467" width="220" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-7" x="995" y="112" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-39" x="995" y="61" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-32" x="995" y="315" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-11" x="995" y="163" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-33" x="995" y="366" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-30" x="995" y="214" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-34" x="995" y="417" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-31" x="995" y="264" width="91" height="14" rx="7"></rect>
			<rect id="Rectangle-Copy-35" x="995" y="467" width="91" height="14" rx="7"></rect>
		</ContentLoader>
	)
}

export function OrgDetailsSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1158 407"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" fill="#D8D8D8" x="10" y="15" width="376" height="377" rx="10"></rect>
			<rect id="Rectangle" fill="#D8D8D8" x="402" y="23" width="128" height="11" rx="5.5"></rect>
			<rect id="Rectangle-Copy-2" fill="#D8D8D8" x="402" y="94" width="128" height="11" rx="5.5"></rect>
			<rect id="Rectangle-Copy-4" fill="#D8D8D8" x="402" y="159" width="128" height="11" rx="5.5"></rect>
			<rect id="Rectangle-Copy" fill="#D8D8D8" x="402" y="45" width="235" height="21" rx="10"></rect>
			<rect id="Rectangle-Copy-3" fill="#D8D8D8" x="402" y="116" width="235" height="21" rx="10"></rect>
			<rect id="Rectangle-Copy-5" fill="#D8D8D8" x="402" y="181" width="235" height="21" rx="10"></rect>
			<rect id="Rectangle-Copy-6" fill="#D8D8D8" x="402" y="228" width="173" height="41" rx="10"></rect>
			<rect id="Rectangle-Copy-7" fill="#D8D8D8" x="589" y="228" width="173" height="41" rx="10"></rect>
		</ContentLoader>
	)
}

export function TabSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1158 407"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<path d="M0,44 L1129,44 C1134.52285,44 1139,48.4771525 1139,54 L1139,169 C1139,174.522847 1134.52285,179 1129,179 L10,179 C4.4771525,179 6.76353751e-16,174.522847 0,169 L0,44 L0,44 Z" id="Rectangle"></path>
			<path d="M10,0 L123,0 C128.522847,-1.08250786e-14 133,4.4771525 133,10 L133,44 L133,44 L0,44 L0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z" id="Rectangle"></path>
			<path d="M148,0 L261,0 C266.522847,-1.08250786e-14 271,4.4771525 271,10 L271,44 L271,44 L138,44 L138,10 C138,4.4771525 142.477153,1.01453063e-15 148,0 Z" id="Rectangle-Copy-8"></path>
			<path d="M286,0 L399,0 C404.522847,-1.08250786e-14 409,4.4771525 409,10 L409,44 L409,44 L276,44 L276,10 C276,4.4771525 280.477153,1.01453063e-15 286,0 Z" id="Rectangle-Copy-9"></path>
			<path d="M424,0 L537,0 C542.522847,-1.08250786e-14 547,4.4771525 547,10 L547,44 L547,44 L414,44 L414,10 C414,4.4771525 418.477153,1.01453063e-15 424,0 Z" id="Rectangle-Copy-10"></path>
		</ContentLoader>
	)
}

export function OrgDetailSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1071 52"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" x="734" y="8" width="160" height="39" rx="10"></rect>
			<rect id="Rectangle-Copy-16" x="911" y="8" width="160" height="39" rx="10"></rect>
			<rect id="Rectangle" x="0" y="0" width="105" height="17" rx="8.5"></rect>
			<rect id="Rectangle-Copy-12" x="224" y="0" width="105" height="17" rx="8.5"></rect>
			<rect id="Rectangle-Copy-14" x="480" y="0" width="105" height="17" rx="8.5"></rect>
			<rect id="Rectangle-Copy-11" x="0" y="27" width="154.411765" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-13" x="224" y="27" width="154.411765" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-15" x="480" y="27" width="154.411765" height="25" rx="12.5"></rect>
		</ContentLoader>
	)
}

export function CardSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1134 166"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" x="0" y="0" width="270" height="166" rx="7"></rect>
			<rect id="Rectangle-Copy-17" x="288" y="0" width="270" height="166" rx="7"></rect>
			<rect id="Rectangle-Copy-18" x="576" y="0" width="270" height="166" rx="7"></rect>
			<rect id="Rectangle-Copy-19" x="864" y="0" width="270" height="166" rx="7"></rect>
		</ContentLoader>
	)
}

export function TransactionSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 364 624"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" fill="#D8D8D8" x="161" y="13" width="31" height="31" rx="15.5"></rect>
			<rect id="Rectangle" fill="#D8D8D8" x="147" y="64" width="58" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy-3" fill="#D8D8D8" x="147" y="150" width="58" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy-5" fill="#D8D8D8" x="137" y="230" width="80" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy-10" fill="#D8D8D8" x="137" y="398" width="80" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy-12" fill="#D8D8D8" x="137" y="457" width="80" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy-15" fill="#D8D8D8" x="137" y="532" width="80" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy-7" fill="#D8D8D8" x="153" y="289" width="48" height="8" rx="4"></rect>
			<rect id="Rectangle-Copy" fill="#D8D8D8" x="103" y="84" width="146" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-9" fill="#D8D8D8" x="112" y="355" width="128" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-6" fill="#D8D8D8" x="92" y="250" width="168" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-11" fill="#D8D8D8" x="92" y="418" width="168" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-13" fill="#D8D8D8" x="92" y="477" width="168" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-16" fill="#D8D8D8" x="92" y="552" width="168" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-14" fill="#D8D8D8" x="38" y="500" width="276" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-17" fill="#D8D8D8" x="38" y="575" width="276" height="15" rx="6"></rect>
			<rect id="Rectangle-Copy-4" fill="#D8D8D8" x="104" y="175" width="146" height="23" rx="6"></rect>
			<rect id="Rectangle-Copy-8" fill="#D8D8D8" x="81" y="309" width="192" height="23" rx="6"></rect>
			<rect id="Rectangle-Copy-2" fill="#D8D8D8" x="128" y="111" width="96" height="11" rx="5.5"></rect>
		</ContentLoader>
	)
}

export function RemittanceSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 749 592"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" fill="#D8D8D8" x="161" y="23" width="40" height="40" rx="20"></rect>
			<rect id="Rectangle" fill="#D8D8D8" x="118" y="83" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-10" fill="#D8D8D8" x="505" y="72" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-12" fill="#D8D8D8" x="505" y="147" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-14" fill="#D8D8D8" x="505" y="222" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-16" fill="#D8D8D8" x="505" y="297" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-2" fill="#D8D8D8" x="118" y="147" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-4" fill="#D8D8D8" x="118" y="211" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-6" fill="#D8D8D8" x="118" y="275" width="126" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-8" fill="#D8D8D8" x="13" y="455" width="245" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-19" fill="#D8D8D8" x="13" y="498" width="81" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy-20" fill="#D8D8D8" x="258" y="498" width="81" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy-23" fill="#D8D8D8" x="505" y="498" width="81" height="10" rx="5"></rect>
			<rect id="Rectangle-Copy" fill="#D8D8D8" x="79" y="105" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-11" fill="#D8D8D8" x="466" y="94" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-13" fill="#D8D8D8" x="466" y="169" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-15" fill="#D8D8D8" x="466" y="244" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-17" fill="#D8D8D8" x="466" y="319" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-3" fill="#D8D8D8" x="79" y="169" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-5" fill="#D8D8D8" x="79" y="233" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-7" fill="#D8D8D8" x="79" y="297" width="204" height="18" rx="5"></rect>
			<rect id="Rectangle-Copy-9" fill="#D8D8D8" x="13" y="521" width="123" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-21" fill="#D8D8D8" x="258" y="521" width="123" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-24" fill="#D8D8D8" x="505" y="521" width="123" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-18" fill="#D8D8D8" x="13" y="543" width="159" height="12" rx="5"></rect>
			<rect id="Rectangle-Copy-22" fill="#D8D8D8" x="258" y="543" width="159" height="12" rx="5"></rect>
		</ContentLoader>
	)
}

export function TopUpSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 379 434"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" fill="#D8D8D8" x="173" y="23" width="33" height="33" rx="16.5"></rect>
			<rect id="Rectangle" fill="#D8D8D8" x="159" y="73" width="61" height="12" rx="6"></rect>
			<rect id="Rectangle-Copy-5" fill="#D8D8D8" x="145" y="246" width="89" height="12" rx="6"></rect>
			<rect id="Rectangle-Copy-7" fill="#D8D8D8" x="145" y="310" width="89" height="12" rx="6"></rect>
			<rect id="Rectangle-Copy-9" fill="#D8D8D8" x="145" y="372" width="89" height="12" rx="6"></rect>
			<rect id="Rectangle-Copy-3" fill="#D8D8D8" x="159" y="160" width="61" height="12" rx="6"></rect>
			<rect id="Rectangle-Copy" fill="#D8D8D8" x="101" y="99" width="177" height="14" rx="6"></rect>
			<rect id="Rectangle-Copy-6" fill="#D8D8D8" x="101" y="272" width="177" height="14" rx="6"></rect>
			<rect id="Rectangle-Copy-8" fill="#D8D8D8" x="101" y="336" width="177" height="14" rx="6"></rect>
			<rect id="Rectangle-Copy-10" fill="#D8D8D8" x="101" y="398" width="177" height="14" rx="6"></rect>
			<rect id="Rectangle-Copy-4" fill="#D8D8D8" x="101" y="194" width="177" height="23" rx="11.5"></rect>
			<rect id="Rectangle-Copy-2" fill="#D8D8D8" x="121" y="124" width="137" height="14" rx="6"></rect>
		</ContentLoader>
	)
}

export function KYCDetails(props) {
	return (
		<ContentLoader
			viewBox="0 0 1134 906"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" x="0" y="0" width="464" height="423" rx="9"></rect>
			<rect id="Rectangle-Copy-3" x="0" y="443" width="366" height="216" rx="9"></rect>
			<rect id="Rectangle-Copy" x="480" y="0" width="270" height="423" rx="9"></rect>
			<rect id="Rectangle-Copy-4" x="386" y="443" width="748" height="216" rx="9"></rect>
			<rect id="Rectangle-Copy-5" x="0" y="679" width="1134" height="227" rx="9"></rect>
			<rect id="Rectangle-Copy-2" x="768" y="0" width="364" height="423" rx="9"></rect>
		</ContentLoader>
	)
}

export function CaseHistoryDetailsSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1134 670"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" x="0" y="0" width="464" height="423" rx="9"></rect>
			<rect id="Rectangle-Copy-3" x="0" y="443" width="366" height="216" rx="9"></rect>
			<rect id="Rectangle-Copy" x="480" y="0" width="270" height="423" rx="9"></rect>
			<rect id="Rectangle-Copy-4" x="386" y="443" width="748" height="216" rx="9"></rect>
			<rect id="Rectangle-Copy-2" x="768" y="0" width="364" height="423" rx="9"></rect>
		</ContentLoader>
	)
}

export function PermissionsSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1101 484"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle" x="0" y="0" width="318" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-2" x="0" y="89" width="318" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-5" x="0" y="180" width="318" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-7" x="0" y="269" width="318" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-8" x="0" y="360" width="318" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-11" x="0" y="450" width="318" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-12" x="598" y="450" width="300" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-15" x="598" y="360" width="300" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-16" x="598" y="269" width="300" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-19" x="598" y="180" width="300" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-20" x="598" y="89" width="300" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-23" x="598" y="0" width="300" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy" x="485" y="0" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-3" x="485" y="89" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-4" x="485" y="180" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-6" x="485" y="269" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-9" x="485" y="360" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-10" x="485" y="450" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-13" x="1053" y="450" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-14" x="1053" y="360" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-17" x="1053" y="269" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-18" x="1053" y="180" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-21" x="1053" y="89" width="48" height="25" rx="12.5"></rect>
			<rect id="Rectangle-Copy-22" x="1053" y="0" width="48" height="25" rx="12.5"></rect>
		</ContentLoader>
	)
}

export function EditProfileSkelton(props) {
	return (
		<ContentLoader
			viewBox="0 0 713 674"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
			style={{
				maxWidth: "713px",
			}}
		>
			<rect id="Rectangle" x="391" y="87" width="118" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-12" x="178" y="577" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-2" x="0" y="87" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-5" x="0" y="217" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-6" x="0" y="289" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-8" x="0" y="361" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-4" x="177" y="217" width="378" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-7" x="177" y="289" width="536" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-9" x="177" y="361" width="536" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-10" x="177" y="433" width="536" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-11" x="177" y="505" width="536" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy" x="539" y="87" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-13" x="338" y="577" width="128" height="30" rx="15"></rect>
			<rect id="Rectangle-Copy-3" x="581" y="217" width="132" height="30" rx="15"></rect>
			<rect id="Rectangle" x="177.5" y="0" width="175" height="175" rx="87.5"></rect>
		</ContentLoader>
	)
}

export function IgwSkeleton(props) {
	return (
		<ContentLoader
			viewBox="0 0 1106 740"
			backgroundColor="#eaeced"
			foregroundColor="#ffffff"
			{...props}
		>
			<rect id="Rectangle-Copy" x="0.5" y="0.5" width="728" height="739"></rect>
			<rect id="Rectangle-Copy-2" x="746.5" y="0.5" width="359" height="739"></rect>
		</ContentLoader>
	)
}