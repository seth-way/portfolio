import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 1.75, ease: 'linear' };

const variants = [
	{
		initial: { y: '-150%' },
		rip: {
			rotate: [0, 0, -45],
			x: [0, 0, '-10%'],
			y: ['-150%', '10%', '65%'],
			times: [0, 0.4, 1],
			transition
		}
	},
	{
		initial: { y: '-150%' },
		rip: {
			rotate: [0, 0, 45],
			x: [0, 0, '10%'],
			y: ['-150%', '10%', '65%'],
			times: [0, 0.4, 1],
			transition
		}
	}
];

const BlockbusterSVG = ({ animate }) => {
	const [animation, setAnimation] = useState('initial');
	useEffect(() => {
		if (animate) setAnimation('rip');
		else setAnimation('initial');
	}, [animate]);
	return (
		<svg
			id="blockbuster-logo"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="-850 -100 1500 1000"
			x="0"
			y="0"
			height="100%"
			width="100%">
			<defs>
				<clipPath id="ticket-path-1">
					<path
						d="
    M320,311
    L47,358
    L0,89
    L268,40
    L275,60
    L282,80
    L279,110
    L295,140
    L295,190
    L315,250
    Z"
					/>
				</clipPath>
				<clipPath id="ticket-path-2">
					<path
						d="
    M268,40
    L275,60
    L282,80
    L279,110
    L295,140
    L295,190
    L315,250
    L320,311
    L570,262
    L575,200
    L545,50
    L510,0
    Z"
					/>
				</clipPath>
			</defs>
			<motion.g
				initial="initial"
				animate={animation}
				variants={variants[0]}
				clipPath="url(#ticket-path-1)"
				id="ticket-1">
				<g transform="translate(-83.889561,-537.94274)">
					<g
						transform="translate(-15,17)"
						fill="#0e3fa9"
						fillOpacity="1"
						clipPath="url(#ticketPath1)">
						<path
							d="m 145.85135,876.54077 c -0.003,-0.4125 -0.42858,-3.225 -0.94533,-6.25 -0.51674,-3.025 -3.25028,-19 -6.07452,-35.5 -2.82425,-16.5 -5.53769,-32.74661 -6.02987,-36.10357 -0.49219,-3.35697 -1.15806,-6.78941 -1.47972,-7.62765 -0.42945,-1.11912 1.1079,-2.31621 5.78596,-4.50534 17.31714,-8.10367 28.14804,-28.12107 24.86278,-45.95081 -3.52374,-19.12401 -17.0663,-32.13048 -35.99418,-34.56934 -4.19063,-0.53997 -8.09001,-1.10374 -8.66528,-1.25284 -0.57527,-0.14909 -1.86263,-4.70794 -2.8608,-10.13076 -0.99816,-5.42283 -3.11288,-16.60969 -4.69937,-24.85969 -1.58649,-8.25 -3.82515,-19.95 -4.97481,-26 -1.14966,-6.05 -2.95177,-15.25464 -4.00468,-20.45475 -1.964309,-9.70129 -2.370679,-14.04525 -1.313909,-14.04525 0.330264,0 6.742759,-1.10876 14.249999,-2.46391 13.4437,-2.42675 44.40117,-7.79973 55.14952,-9.57176 3.025,-0.49871 11.8,-2.04361 19.5,-3.43311 16.72142,-3.01745 52.78102,-9.30301 60.5,-10.54577 3.025,-0.48703 7.975,-1.33834 11,-1.8918 3.025,-0.55347 10.675,-1.91493 17,-3.02547 24.91938,-4.37535 46.02794,-8.07135 57,-9.98043 26.53886,-4.6176 38.33353,-6.69302 57.5,-10.11785 6.6,-1.17935 14.475,-2.52522 17.5,-2.99083 3.025,-0.46561 9.4375,-1.55138 14.25,-2.41282 4.8125,-0.86144 12.6875,-2.26087 17.5,-3.10985 4.8125,-0.84897 12.575,-2.21859 17.25,-3.04359 4.675,-0.825 12.325,-2.1852 17,-3.02266 4.675,-0.83746 10.975,-1.91303 14,-2.39015 3.025,-0.47712 9.55,-1.59103 14.5,-2.47535 4.95,-0.88431 15.525,-2.75412 23.5,-4.15513 7.975,-1.40101 19.45,-3.43749 25.5,-4.52551 6.05,-1.08801 13.475,-2.36817 16.5,-2.84478 5.57107,-0.87777 24.89732,-4.35789 32.82626,-5.9111 3.95284,-0.77432 4.41683,-0.64871 5.37547,1.45528 0.57707,1.26652 2.09804,2.56599 3.37994,2.88773 1.76175,0.44217 2.47601,1.49846 2.92587,4.32692 1.15452,7.25901 2.73216,12.11994 4.1045,12.64656 0.76338,0.29294 1.38796,1.68966 1.38796,3.10383 0,3.72263 3.32034,9.63878 6.87804,12.25525 3.57391,2.62838 9.46555,11.3489 12.99618,19.2363 2.00052,4.46915 2.47731,7.20462 2.54387,14.59482 0.0542,6.01709 0.5347,9.6409 1.41993,10.70852 0.73591,0.88754 1.50995,4.34773 1.72009,7.68932 0.4761,7.57107 2.34394,14.00734 4.06499,14.00734 2.00311,0 3.42712,3.49888 2.76711,6.79893 -0.38998,1.94991 -0.01,3.85217 1.11246,5.56481 1.49178,2.27674 1.55258,3.26081 0.48617,7.8692 -0.67035,2.89688 -2.43543,7.55873 -3.9224,10.35967 -2.50355,4.71581 -2.60735,5.37055 -1.40298,8.84931 0.93833,2.71029 1.00774,4.30394 0.24918,5.72131 -0.75076,1.40281 -0.72376,2.35943 0.0944,3.34525 0.80357,0.96824 1.14996,10.23678 1.15968,31.03001 0.015,32.15432 -0.38241,29.38198 6.37807,44.49225 2.27092,5.07572 3.48593,9.47672 3.72702,13.5 0.19674,3.28309 1.05442,7.31926 1.90598,8.96926 1.42701,2.76504 1.40277,3.23496 -0.30949,6 -1.02177,1.65 -1.86013,4.65718 -1.86303,6.68261 -0.006,3.96211 -0.23825,4.12562 -7.50526,5.27592 -3.86196,0.61131 -15.65779,2.79803 -43,7.97138 -7.15,1.35283 -22.45,4.09906 -34,6.10273 -39.22817,6.80522 -47.98596,8.33314 -60,10.46783 -6.6,1.1727 -14.475,2.52253 -17.5,2.99961 -3.025,0.47708 -9.325,1.55261 -14,2.39007 -33.58858,6.01692 -59.58914,10.5888 -66,11.60528 -3.025,0.47964 -9.325,1.55936 -14,2.39939 -4.675,0.84003 -17.5,3.08338 -28.5,4.98523 -11,1.90185 -28.1,4.88441 -38,6.62792 -9.9,1.74351 -20.475,3.56042 -23.5,4.03758 -3.025,0.47716 -13.375,2.26741 -23,3.97832 -32.23517,5.73004 -51.45605,9.09254 -57,9.97156 -3.025,0.47964 -9.55,1.59466 -14.5,2.47784 -4.95,0.88318 -13.95,2.4702 -20,3.52673 -6.05,1.05653 -15.05,2.63838 -20,3.51523 -9.46318,1.67633 -31.82253,5.477 -32.25,5.4819 -0.1375,0.002 -0.25261,-0.33463 -0.25579,-0.74713 z"
							fill="#0e3fa9"
						/>
					</g>
					<path
						d="m 600.26474,708.60248 -1.46755,0.13707 -2.4461,-12.57726 -2.44606,-12.57728 -1.10642,-0.0503 c -0.60854,-0.0277 -2.03632,0.15104 -3.17287,0.39707 l -2.06647,0.44736 1.58715,7.51272 c 0.87292,4.132 1.98225,9.88688 2.46513,12.7886 l 0.87799,5.27586 -6.98734,1.38553 c -3.84302,0.76205 -7.29848,1.36937 -7.67878,1.3496 -0.75607,-0.0393 -0.17284,2.7519 -9.09922,-43.54615 -2.22541,-11.54242 -3.99701,-21.07203 -3.93692,-21.17692 0.0601,-0.10481 5.97099,-1.32781 13.13533,-2.71768 l 13.02604,-2.52699 6.21674,3.93876 6.21676,3.93876 1.5998,8.64339 1.59983,8.6434 -3.02049,3.51698 c -1.66126,1.93436 -2.98656,3.6121 -2.94511,3.72833 0.0416,0.11622 1.95168,1.22233 4.24495,2.45801 l 4.16959,2.2467 1.48924,8.13199 c 0.81907,4.47261 1.97175,10.33315 2.56153,13.02346 l 1.07223,4.89143 -6.21075,1.29025 c -3.4159,0.70963 -6.87113,1.35192 -7.6783,1.4273 z m -10.23374,-45.95655 -1.29656,-6.09542 -2.99916,0.54232 -2.99914,0.54234 1.12905,6.59596 c 0.62098,3.6278 1.30889,6.78162 1.52875,7.00847 0.24708,0.25502 1.35898,0.12804 2.91229,-0.33254 1.58941,-0.4713 2.56583,-0.57864 2.65745,-0.29205 0.0797,0.24915 0.19414,-0.0704 0.25438,-0.71032 0.0602,-0.63984 -0.47394,-3.90629 -1.18706,-7.25876 z m -31.04412,53.50455 c -3.98121,0.70348 -8.90743,1.61727 -10.94716,2.03065 l -3.70864,0.75156 -1.8495,-9.73433 c -3.1106,-16.3717 -8.56211,-43.93096 -9.85693,-49.83024 l -1.22539,-5.58305 4.61973,-0.7531 c 2.54082,-0.4142 9.04838,-1.5979 14.46123,-2.63042 l 9.84155,-1.87729 1.2527,6.3357 1.2527,6.3357 -6.47454,1.25641 -6.47454,1.25645 0.95832,5.48727 c 0.52708,3.01801 1.08139,5.61429 1.23179,5.76949 0.15036,0.15523 2.60965,-0.23055 5.46502,-0.85727 l 5.19156,-1.13946 1.06876,4.8922 c 0.58785,2.69071 1.10602,5.60178 1.15153,6.46904 l 0.0829,1.57683 -5.42766,1.04019 -5.42767,1.0402 1.66551,7.58828 1.66553,7.58826 6.59059,-1.1169 6.59057,-1.11691 0.78803,3.59033 c 0.43341,1.97469 0.92625,4.82052 1.09523,6.32407 l 0.30724,2.7337 -3.3249,0.64677 c -1.82871,0.35572 -6.58227,1.22236 -10.56347,1.92587 z m -34.72588,6.25683 c -4.02598,0.7442 -7.40769,1.2796 -7.51486,1.18975 -0.10728,-0.0899 -2.43336,-11.82271 -5.16925,-26.07305 -2.73591,-14.25035 -5.12645,-25.90179 -5.31232,-25.89208 -1.25139,0.0651 -2.49745,0.25683 -5.19396,0.79862 l -3.06929,0.6167 -1.33583,-6.33826 -1.33587,-6.33824 2.94614,-0.4067 c 1.62036,-0.22367 6.98007,-1.18128 11.91047,-2.12801 4.9304,-0.94675 10.99641,-2.03992 13.48002,-2.42929 l 4.5157,-0.70792 0.44946,2.04773 c 0.24719,1.12626 0.71538,3.8665 1.04045,6.08944 l 0.591,4.04174 -4.07884,0.89526 c -2.88319,0.63278 -4.09341,1.06543 -4.12846,1.47576 -0.0273,0.31928 2.21916,11.97672 4.99199,25.90543 2.77285,13.92869 4.92722,25.45429 4.78749,25.61244 -0.13972,0.15816 -3.54802,0.89644 -7.57403,1.64067 z m -38.01332,6.88774 -8.52776,1.52307 -5.84563,-3.68308 -5.84565,-3.68303 -0.87747,-5.79328 -0.8775,-5.79329 7.62812,-1.56289 7.62812,-1.56292 0.75522,4.18054 0.75523,4.18052 3.18012,-0.5641 3.18011,-0.56409 -1.09547,-5.13418 c -0.6025,-2.8238 -1.14086,-5.67224 -1.19631,-6.32989 -0.12858,-1.52501 -0.35452,-1.55141 -6.75387,-0.78941 l -5.22665,0.62234 -3.35594,-2.01908 c -1.84578,-1.1105 -4.70673,-2.80917 -6.35772,-3.77483 -1.65096,-0.96569 -2.83895,-1.79151 -2.63997,-1.83519 0.199,-0.0437 -0.45276,-4.4083 -1.44839,-9.6992 l -1.81019,-9.61978 1.47665,-2.09264 c 0.81218,-1.15093 2.68504,-3.72226 4.16195,-5.71403 l 2.6853,-3.6214 8.08306,-1.47046 8.08309,-1.47047 6.25089,3.73463 6.25092,3.73463 1.15322,5.88085 1.15323,5.88085 -6.20679,1.20073 c -3.41372,0.66041 -6.86444,1.24096 -7.66825,1.29011 l -1.46145,0.0894 -0.89201,-4.06409 c -1.01568,-4.62754 -0.97935,-4.59816 -4.68323,-3.78523 l -2.29994,0.50482 1.02975,6.20031 c 0.56641,3.41017 1.22841,6.31247 1.47114,6.44961 0.24272,0.1371 2.83674,-0.0233 5.76449,-0.35656 l 5.3232,-0.60586 5.57281,3.28573 c 3.06506,1.80715 5.85253,3.50371 6.19438,3.77013 0.44594,0.34753 1.15065,3.28134 2.49429,10.38396 l 1.87275,9.89958 -3.52829,4.77233 c -1.94058,2.62479 -3.86433,5.15697 -4.27506,5.62707 -0.63894,0.73134 -1.97787,1.07462 -9.2745,2.37779 z m -47.11966,8.74465 -3.10003,0.52494 -6.34714,-4.11784 c -3.49091,-2.26477 -6.07284,-4.03613 -5.73766,-3.93632 0.46786,0.13935 0.4048,-0.7594 -0.27131,-3.8674 -0.4847,-2.22687 -2.74168,-13.8941 -5.01606,-25.92705 -2.27436,-12.03296 -4.29239,-22.61263 -4.48449,-23.51039 l -0.34925,-1.63227 2.54034,-0.55758 c 1.3972,-0.30666 4.8974,-0.94381 7.77816,-1.41588 l 5.2378,-0.85831 3.58253,18.63203 c 1.97041,10.24763 4.23671,21.97468 5.03626,26.06013 l 1.45372,7.42809 3.13443,-0.55503 3.1344,-0.55504 -0.99521,-5.83879 c -1.22338,-7.17746 -6.88192,-36.69453 -8.10411,-42.27413 l -0.89298,-4.07677 7.63823,-1.47927 c 4.20104,-0.8136 7.73009,-1.40853 7.84239,-1.3221 0.11224,0.0865 2.0781,9.8969 4.36857,21.80102 2.29044,11.90412 4.72282,24.28974 5.4053,27.52363 l 1.24084,5.87981 -4.10192,5.57138 -4.10194,5.5714 -5.89542,1.2034 c -3.24248,0.66187 -7.29044,1.43964 -8.99547,1.72835 z m -37.89893,6.81205 c -3.9812,0.70349 -9.32938,1.70961 -11.88483,2.23583 -4.17757,0.86022 -4.64709,0.87647 -4.65432,0.16105 -0.004,-0.43767 -1.03284,-5.90268 -2.28532,-12.1445 -4.77059,-23.77406 -9.89855,-51.16159 -9.6588,-51.58564 0.13738,-0.24303 6.21899,-1.53933 13.51468,-2.88067 l 13.26489,-2.43887 5.12203,3.34735 5.12203,3.34733 1.66792,8.43775 1.66791,8.43776 -2.79825,3.6589 c -1.53901,2.01243 -2.76745,3.80162 -2.72984,3.976 0.0378,0.17434 2.16601,1.3478 4.7298,2.6076 l 4.66142,2.29052 1.00747,5.88916 c 0.5541,3.23903 1.27935,7.18127 1.61164,8.76055 l 0.60419,2.87139 -1.6951,2.19493 c -0.9323,1.2072 -2.83373,3.72653 -4.22541,5.59849 -2.20853,2.97072 -2.7385,3.43873 -4.16695,3.67981 -0.90013,0.15193 -4.89394,0.8518 -8.87516,1.5553 z m 1.41237,-20.27995 c -1.5882,-7.88541 -1.27042,-7.51054 -5.57671,-6.57846 l -2.0457,0.44278 1.40557,7.02217 c 0.77307,3.86219 1.50488,7.08525 1.62623,7.16236 0.12135,0.077 1.51767,-0.14446 3.1029,-0.49242 l 2.88224,-0.63262 -1.39452,-6.92378 z m -5.02936,-25.91312 c -0.64642,-3.6553 -1.31463,-6.7898 -1.48486,-6.96553 -0.17031,-0.17569 -1.54695,-0.0479 -3.05924,0.28404 -3.3636,0.73824 -3.319,0.50263 -1.59184,8.41079 l 1.25271,5.73577 1.66783,-0.1873 c 0.9173,-0.10303 2.28047,-0.28731 3.02927,-0.40952 l 1.36144,-0.22221 -1.17529,-6.64604 z m -23.8976,51.27492 c -4.65613,0.85373 -8.53181,1.49655 -8.6126,1.42849 -0.0808,-0.0681 -3.52446,-5.43204 -7.65261,-11.91994 -4.12812,-6.4879 -7.73516,-12.05345 -8.01562,-12.36786 -0.30543,-0.34234 -0.14826,1.10171 0.3918,3.60017 0.49601,2.2945 1.68715,8.3701 2.64702,13.50133 l 1.74521,9.3295 -7.66173,1.39347 c -4.21396,0.76642 -7.75234,1.33549 -7.86308,1.26463 -0.11073,-0.0709 -1.33376,-6.21488 -2.71783,-13.65332 -1.38407,-7.43845 -4.11788,-21.96941 -6.07517,-32.29102 l -3.55867,-18.76659 5.52007,-0.91972 c 3.03603,-0.50582 6.56154,-1.14747 7.83439,-1.42583 l 2.31431,-0.50611 0.45351,3.20438 c 0.80566,5.69305 4.47716,24.20528 4.72627,23.83067 0.13285,-0.19977 1.27054,-6.70415 2.5282,-14.45421 l 2.28662,-14.09099 7.68706,-1.62523 c 4.22793,-0.89387 7.82068,-1.53975 7.98393,-1.43526 0.16324,0.10449 -1.41847,7.47636 -3.51498,16.3819 l -3.81176,16.19191 2.65508,3.79632 c 1.4603,2.08798 4.58286,6.55181 6.939,9.91964 6.99539,9.99899 12.43441,17.93837 12.33257,18.00192 -0.0525,0.0326 -3.90486,0.75798 -8.56099,1.6117 z m -59.33133,10.8292 -6.02297,1.07442 -6.47323,-3.70052 -6.4732,-3.70053 -0.74783,-4.28457 c -1.1498,-6.58766 -6.40502,-34.14419 -7.21716,-37.84445 l -0.72211,-3.28996 4.29178,-5.88074 4.29176,-5.88073 8.49454,-1.56373 8.49454,-1.56377 5.79843,3.66737 5.79841,3.66737 1.47972,7.7983 c 0.81384,4.28907 1.42476,7.86738 1.35761,7.95177 -0.0672,0.0844 -3.46835,0.79097 -7.55827,1.57011 l -7.4362,1.41668 -1.21811,-6.21691 -1.2181,-6.21689 -2.99846,0.37052 c -1.64917,0.20378 -3.06894,0.48066 -3.15509,0.61525 -0.15392,0.24048 3.65193,20.40776 6.27586,33.25598 l 1.33615,6.54245 3.06946,-0.54122 3.06945,-0.54123 -1.38293,-7.50432 c -0.76063,-4.12737 -1.33132,-7.58498 -1.2682,-7.68361 0.0631,-0.0986 3.46266,-0.79646 7.5545,-1.55078 l 7.43978,-1.3715 1.86312,9.08776 1.86315,9.08776 -4.25237,5.72649 c -4.1712,5.61712 -4.29116,5.7332 -6.28172,6.07765 -1.11614,0.19313 -4.73968,0.83465 -8.05231,1.42558 z m -40.76092,7.56342 -7.81102,1.41336 -6.15089,-3.9368 -6.15091,-3.9368 -3.71362,-19.38343 c -2.04249,-10.66085 -4.02683,-20.79679 -4.40968,-22.52424 l -0.69599,-3.14086 4.47914,-6.06512 4.47916,-6.06511 3.93106,-0.57614 c 2.16208,-0.31686 5.81321,-0.9892 8.11363,-1.49412 l 4.18256,-0.91802 6.23658,3.74784 6.23658,3.74779 2.09895,10.94234 c 1.15444,6.01826 3.08964,16.0565 4.30047,22.30721 1.21084,6.25068 2.17436,11.79893 2.14118,12.32942 -0.0809,1.29125 -7.78962,11.94474 -8.72192,12.05361 -0.40387,0.0472 -4.24924,0.72173 -8.54527,1.49906 z m -2.58093,-32.75898 c -2.08665,-10.85092 -3.93819,-19.8778 -4.11453,-20.0598 -0.17632,-0.18196 -1.55396,-0.0601 -3.06143,0.27071 l -2.7408,0.60155 2.65325,13.43089 c 1.45929,7.38698 3.16364,16.33138 3.78745,19.87642 l 1.13419,6.44558 2.1558,-0.30017 c 1.18568,-0.16508 2.56623,-0.35328 3.0679,-0.4182 0.90147,-0.11661 0.86779,-0.34868 -2.88183,-19.84698 z m -36.72316,39.86926 c -6.37864,1.1914 -11.6663,2.12219 -11.75035,2.06838 -0.2004,-0.12825 -10.07364,-51.16673 -11.36896,-58.77054 l -1.00119,-5.87718 7.73873,-1.36849 c 4.25631,-0.75268 7.77638,-1.34506 7.82236,-1.31641 0.046,0.0286 1.5098,7.42925 3.25292,16.44578 1.74312,9.01654 4.0715,20.70725 5.17419,25.97936 l 2.00492,9.58568 5.92966,-1.01354 c 3.26136,-0.55746 6.27718,-1.06557 6.70183,-1.12919 0.69446,-0.10408 0.90107,0.47191 2.05395,5.72448 1.4609,6.65611 1.57157,6.34868 -2.54788,7.07821 -1.32696,0.23499 -7.63153,1.40205 -14.01018,2.59346 z m -34.61056,6.35288 c -4.22183,0.74921 -10.01571,1.8278 -12.87533,2.39689 l -5.1993,1.03471 -2.16955,-11.20761 c -1.19328,-6.16416 -3.94662,-20.35334 -6.11858,-31.53154 -2.17196,-11.1782 -3.90827,-20.74308 -3.85846,-21.25531 0.0894,-0.91829 0.28173,-0.96688 13.77215,-3.47849 l 13.68162,-2.54721 5.00437,3.23091 5.0044,3.23091 1.63568,8.63624 1.63569,8.63622 -2.90742,3.71691 -2.90741,3.71692 4.8168,2.38065 4.81678,2.38062 1.28426,6.08056 c 0.70634,3.3443 1.34741,7.44233 1.4246,9.10676 l 0.14044,3.02616 -3.54207,4.82686 c -3.44676,4.69696 -4.83096,6.2448 -5.59163,6.25281 -0.20401,0.002 -3.82514,0.61686 -8.04694,1.36603 z m 0.006,-20.37256 -1.38337,-7.10172 -3.06818,0.67343 -3.06819,0.6734 1.39752,6.9854 c 0.87654,4.38145 1.57227,7.00767 1.86632,7.04513 0.25788,0.0328 1.63219,-0.21782 3.05405,-0.55707 l 2.58521,-0.61683 -1.38336,-7.10174 z m -5.01372,-25.78672 c -0.65023,-3.55427 -1.30038,-6.59016 -1.44482,-6.74647 -0.14443,-0.15626 -1.49324,-0.0139 -2.99737,0.31611 l -2.73478,0.60022 0.64969,4.30065 c 0.35735,2.36535 0.89561,5.42579 1.19614,6.80102 l 0.54645,2.50042 2.98344,-0.65482 2.98345,-0.65481 -1.18221,-6.46232 z"
						className="blockbuster-letters"
						fill="#ffa903"
					/>
					<g>
						<rect
							width="469.37524"
							height="4.9980078"
							x="29.369843"
							y="653.59052"
							transform="matrix(0.98497261,-0.17271061,0.16810652,0.98576884,0,0)"
							fill="#ffa903"
							stroke="none"
						/>
						<rect
							width="226.13228"
							height="4.9470053"
							x="646.4306"
							y="-32.174416"
							transform="matrix(0.17098022,0.98527446,-0.99679277,-0.08002604,0,0)"
							fill="#ffa903"
							stroke="none"
						/>
						<rect
							width="469.37524"
							height="4.9980078"
							x="33.70599"
							y="875.6543"
							transform="matrix(0.98497261,-0.17271061,0.16810652,0.98576884,0,0)"
							fill="#ffa903"
							stroke="none"
						/>
					</g>
				</g>
			</motion.g>
			<motion.g
				initial="initial"
				animate={animation}
				variants={variants[1]}
				clipPath="url(#ticket-path-2)"
				id="ticket-2">
				<g transform="translate(-83.889561,-537.94274)">
					<g
						transform="translate(-15,17)"
						fill="#0e3fa9"
						fillOpacity="1"
						clipPath="url(#ticketPath1)">
						<path
							d="m 145.85135,876.54077 c -0.003,-0.4125 -0.42858,-3.225 -0.94533,-6.25 -0.51674,-3.025 -3.25028,-19 -6.07452,-35.5 -2.82425,-16.5 -5.53769,-32.74661 -6.02987,-36.10357 -0.49219,-3.35697 -1.15806,-6.78941 -1.47972,-7.62765 -0.42945,-1.11912 1.1079,-2.31621 5.78596,-4.50534 17.31714,-8.10367 28.14804,-28.12107 24.86278,-45.95081 -3.52374,-19.12401 -17.0663,-32.13048 -35.99418,-34.56934 -4.19063,-0.53997 -8.09001,-1.10374 -8.66528,-1.25284 -0.57527,-0.14909 -1.86263,-4.70794 -2.8608,-10.13076 -0.99816,-5.42283 -3.11288,-16.60969 -4.69937,-24.85969 -1.58649,-8.25 -3.82515,-19.95 -4.97481,-26 -1.14966,-6.05 -2.95177,-15.25464 -4.00468,-20.45475 -1.964309,-9.70129 -2.370679,-14.04525 -1.313909,-14.04525 0.330264,0 6.742759,-1.10876 14.249999,-2.46391 13.4437,-2.42675 44.40117,-7.79973 55.14952,-9.57176 3.025,-0.49871 11.8,-2.04361 19.5,-3.43311 16.72142,-3.01745 52.78102,-9.30301 60.5,-10.54577 3.025,-0.48703 7.975,-1.33834 11,-1.8918 3.025,-0.55347 10.675,-1.91493 17,-3.02547 24.91938,-4.37535 46.02794,-8.07135 57,-9.98043 26.53886,-4.6176 38.33353,-6.69302 57.5,-10.11785 6.6,-1.17935 14.475,-2.52522 17.5,-2.99083 3.025,-0.46561 9.4375,-1.55138 14.25,-2.41282 4.8125,-0.86144 12.6875,-2.26087 17.5,-3.10985 4.8125,-0.84897 12.575,-2.21859 17.25,-3.04359 4.675,-0.825 12.325,-2.1852 17,-3.02266 4.675,-0.83746 10.975,-1.91303 14,-2.39015 3.025,-0.47712 9.55,-1.59103 14.5,-2.47535 4.95,-0.88431 15.525,-2.75412 23.5,-4.15513 7.975,-1.40101 19.45,-3.43749 25.5,-4.52551 6.05,-1.08801 13.475,-2.36817 16.5,-2.84478 5.57107,-0.87777 24.89732,-4.35789 32.82626,-5.9111 3.95284,-0.77432 4.41683,-0.64871 5.37547,1.45528 0.57707,1.26652 2.09804,2.56599 3.37994,2.88773 1.76175,0.44217 2.47601,1.49846 2.92587,4.32692 1.15452,7.25901 2.73216,12.11994 4.1045,12.64656 0.76338,0.29294 1.38796,1.68966 1.38796,3.10383 0,3.72263 3.32034,9.63878 6.87804,12.25525 3.57391,2.62838 9.46555,11.3489 12.99618,19.2363 2.00052,4.46915 2.47731,7.20462 2.54387,14.59482 0.0542,6.01709 0.5347,9.6409 1.41993,10.70852 0.73591,0.88754 1.50995,4.34773 1.72009,7.68932 0.4761,7.57107 2.34394,14.00734 4.06499,14.00734 2.00311,0 3.42712,3.49888 2.76711,6.79893 -0.38998,1.94991 -0.01,3.85217 1.11246,5.56481 1.49178,2.27674 1.55258,3.26081 0.48617,7.8692 -0.67035,2.89688 -2.43543,7.55873 -3.9224,10.35967 -2.50355,4.71581 -2.60735,5.37055 -1.40298,8.84931 0.93833,2.71029 1.00774,4.30394 0.24918,5.72131 -0.75076,1.40281 -0.72376,2.35943 0.0944,3.34525 0.80357,0.96824 1.14996,10.23678 1.15968,31.03001 0.015,32.15432 -0.38241,29.38198 6.37807,44.49225 2.27092,5.07572 3.48593,9.47672 3.72702,13.5 0.19674,3.28309 1.05442,7.31926 1.90598,8.96926 1.42701,2.76504 1.40277,3.23496 -0.30949,6 -1.02177,1.65 -1.86013,4.65718 -1.86303,6.68261 -0.006,3.96211 -0.23825,4.12562 -7.50526,5.27592 -3.86196,0.61131 -15.65779,2.79803 -43,7.97138 -7.15,1.35283 -22.45,4.09906 -34,6.10273 -39.22817,6.80522 -47.98596,8.33314 -60,10.46783 -6.6,1.1727 -14.475,2.52253 -17.5,2.99961 -3.025,0.47708 -9.325,1.55261 -14,2.39007 -33.58858,6.01692 -59.58914,10.5888 -66,11.60528 -3.025,0.47964 -9.325,1.55936 -14,2.39939 -4.675,0.84003 -17.5,3.08338 -28.5,4.98523 -11,1.90185 -28.1,4.88441 -38,6.62792 -9.9,1.74351 -20.475,3.56042 -23.5,4.03758 -3.025,0.47716 -13.375,2.26741 -23,3.97832 -32.23517,5.73004 -51.45605,9.09254 -57,9.97156 -3.025,0.47964 -9.55,1.59466 -14.5,2.47784 -4.95,0.88318 -13.95,2.4702 -20,3.52673 -6.05,1.05653 -15.05,2.63838 -20,3.51523 -9.46318,1.67633 -31.82253,5.477 -32.25,5.4819 -0.1375,0.002 -0.25261,-0.33463 -0.25579,-0.74713 z"
							fill="#0e3fa9"
						/>
					</g>
					<path
						d="m 600.26474,708.60248 -1.46755,0.13707 -2.4461,-12.57726 -2.44606,-12.57728 -1.10642,-0.0503 c -0.60854,-0.0277 -2.03632,0.15104 -3.17287,0.39707 l -2.06647,0.44736 1.58715,7.51272 c 0.87292,4.132 1.98225,9.88688 2.46513,12.7886 l 0.87799,5.27586 -6.98734,1.38553 c -3.84302,0.76205 -7.29848,1.36937 -7.67878,1.3496 -0.75607,-0.0393 -0.17284,2.7519 -9.09922,-43.54615 -2.22541,-11.54242 -3.99701,-21.07203 -3.93692,-21.17692 0.0601,-0.10481 5.97099,-1.32781 13.13533,-2.71768 l 13.02604,-2.52699 6.21674,3.93876 6.21676,3.93876 1.5998,8.64339 1.59983,8.6434 -3.02049,3.51698 c -1.66126,1.93436 -2.98656,3.6121 -2.94511,3.72833 0.0416,0.11622 1.95168,1.22233 4.24495,2.45801 l 4.16959,2.2467 1.48924,8.13199 c 0.81907,4.47261 1.97175,10.33315 2.56153,13.02346 l 1.07223,4.89143 -6.21075,1.29025 c -3.4159,0.70963 -6.87113,1.35192 -7.6783,1.4273 z m -10.23374,-45.95655 -1.29656,-6.09542 -2.99916,0.54232 -2.99914,0.54234 1.12905,6.59596 c 0.62098,3.6278 1.30889,6.78162 1.52875,7.00847 0.24708,0.25502 1.35898,0.12804 2.91229,-0.33254 1.58941,-0.4713 2.56583,-0.57864 2.65745,-0.29205 0.0797,0.24915 0.19414,-0.0704 0.25438,-0.71032 0.0602,-0.63984 -0.47394,-3.90629 -1.18706,-7.25876 z m -31.04412,53.50455 c -3.98121,0.70348 -8.90743,1.61727 -10.94716,2.03065 l -3.70864,0.75156 -1.8495,-9.73433 c -3.1106,-16.3717 -8.56211,-43.93096 -9.85693,-49.83024 l -1.22539,-5.58305 4.61973,-0.7531 c 2.54082,-0.4142 9.04838,-1.5979 14.46123,-2.63042 l 9.84155,-1.87729 1.2527,6.3357 1.2527,6.3357 -6.47454,1.25641 -6.47454,1.25645 0.95832,5.48727 c 0.52708,3.01801 1.08139,5.61429 1.23179,5.76949 0.15036,0.15523 2.60965,-0.23055 5.46502,-0.85727 l 5.19156,-1.13946 1.06876,4.8922 c 0.58785,2.69071 1.10602,5.60178 1.15153,6.46904 l 0.0829,1.57683 -5.42766,1.04019 -5.42767,1.0402 1.66551,7.58828 1.66553,7.58826 6.59059,-1.1169 6.59057,-1.11691 0.78803,3.59033 c 0.43341,1.97469 0.92625,4.82052 1.09523,6.32407 l 0.30724,2.7337 -3.3249,0.64677 c -1.82871,0.35572 -6.58227,1.22236 -10.56347,1.92587 z m -34.72588,6.25683 c -4.02598,0.7442 -7.40769,1.2796 -7.51486,1.18975 -0.10728,-0.0899 -2.43336,-11.82271 -5.16925,-26.07305 -2.73591,-14.25035 -5.12645,-25.90179 -5.31232,-25.89208 -1.25139,0.0651 -2.49745,0.25683 -5.19396,0.79862 l -3.06929,0.6167 -1.33583,-6.33826 -1.33587,-6.33824 2.94614,-0.4067 c 1.62036,-0.22367 6.98007,-1.18128 11.91047,-2.12801 4.9304,-0.94675 10.99641,-2.03992 13.48002,-2.42929 l 4.5157,-0.70792 0.44946,2.04773 c 0.24719,1.12626 0.71538,3.8665 1.04045,6.08944 l 0.591,4.04174 -4.07884,0.89526 c -2.88319,0.63278 -4.09341,1.06543 -4.12846,1.47576 -0.0273,0.31928 2.21916,11.97672 4.99199,25.90543 2.77285,13.92869 4.92722,25.45429 4.78749,25.61244 -0.13972,0.15816 -3.54802,0.89644 -7.57403,1.64067 z m -38.01332,6.88774 -8.52776,1.52307 -5.84563,-3.68308 -5.84565,-3.68303 -0.87747,-5.79328 -0.8775,-5.79329 7.62812,-1.56289 7.62812,-1.56292 0.75522,4.18054 0.75523,4.18052 3.18012,-0.5641 3.18011,-0.56409 -1.09547,-5.13418 c -0.6025,-2.8238 -1.14086,-5.67224 -1.19631,-6.32989 -0.12858,-1.52501 -0.35452,-1.55141 -6.75387,-0.78941 l -5.22665,0.62234 -3.35594,-2.01908 c -1.84578,-1.1105 -4.70673,-2.80917 -6.35772,-3.77483 -1.65096,-0.96569 -2.83895,-1.79151 -2.63997,-1.83519 0.199,-0.0437 -0.45276,-4.4083 -1.44839,-9.6992 l -1.81019,-9.61978 1.47665,-2.09264 c 0.81218,-1.15093 2.68504,-3.72226 4.16195,-5.71403 l 2.6853,-3.6214 8.08306,-1.47046 8.08309,-1.47047 6.25089,3.73463 6.25092,3.73463 1.15322,5.88085 1.15323,5.88085 -6.20679,1.20073 c -3.41372,0.66041 -6.86444,1.24096 -7.66825,1.29011 l -1.46145,0.0894 -0.89201,-4.06409 c -1.01568,-4.62754 -0.97935,-4.59816 -4.68323,-3.78523 l -2.29994,0.50482 1.02975,6.20031 c 0.56641,3.41017 1.22841,6.31247 1.47114,6.44961 0.24272,0.1371 2.83674,-0.0233 5.76449,-0.35656 l 5.3232,-0.60586 5.57281,3.28573 c 3.06506,1.80715 5.85253,3.50371 6.19438,3.77013 0.44594,0.34753 1.15065,3.28134 2.49429,10.38396 l 1.87275,9.89958 -3.52829,4.77233 c -1.94058,2.62479 -3.86433,5.15697 -4.27506,5.62707 -0.63894,0.73134 -1.97787,1.07462 -9.2745,2.37779 z m -47.11966,8.74465 -3.10003,0.52494 -6.34714,-4.11784 c -3.49091,-2.26477 -6.07284,-4.03613 -5.73766,-3.93632 0.46786,0.13935 0.4048,-0.7594 -0.27131,-3.8674 -0.4847,-2.22687 -2.74168,-13.8941 -5.01606,-25.92705 -2.27436,-12.03296 -4.29239,-22.61263 -4.48449,-23.51039 l -0.34925,-1.63227 2.54034,-0.55758 c 1.3972,-0.30666 4.8974,-0.94381 7.77816,-1.41588 l 5.2378,-0.85831 3.58253,18.63203 c 1.97041,10.24763 4.23671,21.97468 5.03626,26.06013 l 1.45372,7.42809 3.13443,-0.55503 3.1344,-0.55504 -0.99521,-5.83879 c -1.22338,-7.17746 -6.88192,-36.69453 -8.10411,-42.27413 l -0.89298,-4.07677 7.63823,-1.47927 c 4.20104,-0.8136 7.73009,-1.40853 7.84239,-1.3221 0.11224,0.0865 2.0781,9.8969 4.36857,21.80102 2.29044,11.90412 4.72282,24.28974 5.4053,27.52363 l 1.24084,5.87981 -4.10192,5.57138 -4.10194,5.5714 -5.89542,1.2034 c -3.24248,0.66187 -7.29044,1.43964 -8.99547,1.72835 z m -37.89893,6.81205 c -3.9812,0.70349 -9.32938,1.70961 -11.88483,2.23583 -4.17757,0.86022 -4.64709,0.87647 -4.65432,0.16105 -0.004,-0.43767 -1.03284,-5.90268 -2.28532,-12.1445 -4.77059,-23.77406 -9.89855,-51.16159 -9.6588,-51.58564 0.13738,-0.24303 6.21899,-1.53933 13.51468,-2.88067 l 13.26489,-2.43887 5.12203,3.34735 5.12203,3.34733 1.66792,8.43775 1.66791,8.43776 -2.79825,3.6589 c -1.53901,2.01243 -2.76745,3.80162 -2.72984,3.976 0.0378,0.17434 2.16601,1.3478 4.7298,2.6076 l 4.66142,2.29052 1.00747,5.88916 c 0.5541,3.23903 1.27935,7.18127 1.61164,8.76055 l 0.60419,2.87139 -1.6951,2.19493 c -0.9323,1.2072 -2.83373,3.72653 -4.22541,5.59849 -2.20853,2.97072 -2.7385,3.43873 -4.16695,3.67981 -0.90013,0.15193 -4.89394,0.8518 -8.87516,1.5553 z m 1.41237,-20.27995 c -1.5882,-7.88541 -1.27042,-7.51054 -5.57671,-6.57846 l -2.0457,0.44278 1.40557,7.02217 c 0.77307,3.86219 1.50488,7.08525 1.62623,7.16236 0.12135,0.077 1.51767,-0.14446 3.1029,-0.49242 l 2.88224,-0.63262 -1.39452,-6.92378 z m -5.02936,-25.91312 c -0.64642,-3.6553 -1.31463,-6.7898 -1.48486,-6.96553 -0.17031,-0.17569 -1.54695,-0.0479 -3.05924,0.28404 -3.3636,0.73824 -3.319,0.50263 -1.59184,8.41079 l 1.25271,5.73577 1.66783,-0.1873 c 0.9173,-0.10303 2.28047,-0.28731 3.02927,-0.40952 l 1.36144,-0.22221 -1.17529,-6.64604 z m -23.8976,51.27492 c -4.65613,0.85373 -8.53181,1.49655 -8.6126,1.42849 -0.0808,-0.0681 -3.52446,-5.43204 -7.65261,-11.91994 -4.12812,-6.4879 -7.73516,-12.05345 -8.01562,-12.36786 -0.30543,-0.34234 -0.14826,1.10171 0.3918,3.60017 0.49601,2.2945 1.68715,8.3701 2.64702,13.50133 l 1.74521,9.3295 -7.66173,1.39347 c -4.21396,0.76642 -7.75234,1.33549 -7.86308,1.26463 -0.11073,-0.0709 -1.33376,-6.21488 -2.71783,-13.65332 -1.38407,-7.43845 -4.11788,-21.96941 -6.07517,-32.29102 l -3.55867,-18.76659 5.52007,-0.91972 c 3.03603,-0.50582 6.56154,-1.14747 7.83439,-1.42583 l 2.31431,-0.50611 0.45351,3.20438 c 0.80566,5.69305 4.47716,24.20528 4.72627,23.83067 0.13285,-0.19977 1.27054,-6.70415 2.5282,-14.45421 l 2.28662,-14.09099 7.68706,-1.62523 c 4.22793,-0.89387 7.82068,-1.53975 7.98393,-1.43526 0.16324,0.10449 -1.41847,7.47636 -3.51498,16.3819 l -3.81176,16.19191 2.65508,3.79632 c 1.4603,2.08798 4.58286,6.55181 6.939,9.91964 6.99539,9.99899 12.43441,17.93837 12.33257,18.00192 -0.0525,0.0326 -3.90486,0.75798 -8.56099,1.6117 z m -59.33133,10.8292 -6.02297,1.07442 -6.47323,-3.70052 -6.4732,-3.70053 -0.74783,-4.28457 c -1.1498,-6.58766 -6.40502,-34.14419 -7.21716,-37.84445 l -0.72211,-3.28996 4.29178,-5.88074 4.29176,-5.88073 8.49454,-1.56373 8.49454,-1.56377 5.79843,3.66737 5.79841,3.66737 1.47972,7.7983 c 0.81384,4.28907 1.42476,7.86738 1.35761,7.95177 -0.0672,0.0844 -3.46835,0.79097 -7.55827,1.57011 l -7.4362,1.41668 -1.21811,-6.21691 -1.2181,-6.21689 -2.99846,0.37052 c -1.64917,0.20378 -3.06894,0.48066 -3.15509,0.61525 -0.15392,0.24048 3.65193,20.40776 6.27586,33.25598 l 1.33615,6.54245 3.06946,-0.54122 3.06945,-0.54123 -1.38293,-7.50432 c -0.76063,-4.12737 -1.33132,-7.58498 -1.2682,-7.68361 0.0631,-0.0986 3.46266,-0.79646 7.5545,-1.55078 l 7.43978,-1.3715 1.86312,9.08776 1.86315,9.08776 -4.25237,5.72649 c -4.1712,5.61712 -4.29116,5.7332 -6.28172,6.07765 -1.11614,0.19313 -4.73968,0.83465 -8.05231,1.42558 z m -40.76092,7.56342 -7.81102,1.41336 -6.15089,-3.9368 -6.15091,-3.9368 -3.71362,-19.38343 c -2.04249,-10.66085 -4.02683,-20.79679 -4.40968,-22.52424 l -0.69599,-3.14086 4.47914,-6.06512 4.47916,-6.06511 3.93106,-0.57614 c 2.16208,-0.31686 5.81321,-0.9892 8.11363,-1.49412 l 4.18256,-0.91802 6.23658,3.74784 6.23658,3.74779 2.09895,10.94234 c 1.15444,6.01826 3.08964,16.0565 4.30047,22.30721 1.21084,6.25068 2.17436,11.79893 2.14118,12.32942 -0.0809,1.29125 -7.78962,11.94474 -8.72192,12.05361 -0.40387,0.0472 -4.24924,0.72173 -8.54527,1.49906 z m -2.58093,-32.75898 c -2.08665,-10.85092 -3.93819,-19.8778 -4.11453,-20.0598 -0.17632,-0.18196 -1.55396,-0.0601 -3.06143,0.27071 l -2.7408,0.60155 2.65325,13.43089 c 1.45929,7.38698 3.16364,16.33138 3.78745,19.87642 l 1.13419,6.44558 2.1558,-0.30017 c 1.18568,-0.16508 2.56623,-0.35328 3.0679,-0.4182 0.90147,-0.11661 0.86779,-0.34868 -2.88183,-19.84698 z m -36.72316,39.86926 c -6.37864,1.1914 -11.6663,2.12219 -11.75035,2.06838 -0.2004,-0.12825 -10.07364,-51.16673 -11.36896,-58.77054 l -1.00119,-5.87718 7.73873,-1.36849 c 4.25631,-0.75268 7.77638,-1.34506 7.82236,-1.31641 0.046,0.0286 1.5098,7.42925 3.25292,16.44578 1.74312,9.01654 4.0715,20.70725 5.17419,25.97936 l 2.00492,9.58568 5.92966,-1.01354 c 3.26136,-0.55746 6.27718,-1.06557 6.70183,-1.12919 0.69446,-0.10408 0.90107,0.47191 2.05395,5.72448 1.4609,6.65611 1.57157,6.34868 -2.54788,7.07821 -1.32696,0.23499 -7.63153,1.40205 -14.01018,2.59346 z m -34.61056,6.35288 c -4.22183,0.74921 -10.01571,1.8278 -12.87533,2.39689 l -5.1993,1.03471 -2.16955,-11.20761 c -1.19328,-6.16416 -3.94662,-20.35334 -6.11858,-31.53154 -2.17196,-11.1782 -3.90827,-20.74308 -3.85846,-21.25531 0.0894,-0.91829 0.28173,-0.96688 13.77215,-3.47849 l 13.68162,-2.54721 5.00437,3.23091 5.0044,3.23091 1.63568,8.63624 1.63569,8.63622 -2.90742,3.71691 -2.90741,3.71692 4.8168,2.38065 4.81678,2.38062 1.28426,6.08056 c 0.70634,3.3443 1.34741,7.44233 1.4246,9.10676 l 0.14044,3.02616 -3.54207,4.82686 c -3.44676,4.69696 -4.83096,6.2448 -5.59163,6.25281 -0.20401,0.002 -3.82514,0.61686 -8.04694,1.36603 z m 0.006,-20.37256 -1.38337,-7.10172 -3.06818,0.67343 -3.06819,0.6734 1.39752,6.9854 c 0.87654,4.38145 1.57227,7.00767 1.86632,7.04513 0.25788,0.0328 1.63219,-0.21782 3.05405,-0.55707 l 2.58521,-0.61683 -1.38336,-7.10174 z m -5.01372,-25.78672 c -0.65023,-3.55427 -1.30038,-6.59016 -1.44482,-6.74647 -0.14443,-0.15626 -1.49324,-0.0139 -2.99737,0.31611 l -2.73478,0.60022 0.64969,4.30065 c 0.35735,2.36535 0.89561,5.42579 1.19614,6.80102 l 0.54645,2.50042 2.98344,-0.65482 2.98345,-0.65481 -1.18221,-6.46232 z"
						className="blockbuster-letters"
						fill="#ffa903"
					/>
					<g>
						<rect
							width="469.37524"
							height="4.9980078"
							x="29.369843"
							y="653.59052"
							transform="matrix(0.98497261,-0.17271061,0.16810652,0.98576884,0,0)"
							fill="#ffa903"
							stroke="none"
						/>
						<rect
							width="226.13228"
							height="4.9470053"
							x="646.4306"
							y="-32.174416"
							transform="matrix(0.17098022,0.98527446,-0.99679277,-0.08002604,0,0)"
							fill="#ffa903"
							stroke="none"
						/>
						<rect
							width="469.37524"
							height="4.9980078"
							x="33.70599"
							y="875.6543"
							transform="matrix(0.98497261,-0.17271061,0.16810652,0.98576884,0,0)"
							fill="#ffa903"
							stroke="none"
						/>
					</g>
				</g>
			</motion.g>
		</svg>
	);
};

export default BlockbusterSVG;
