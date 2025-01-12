import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const variants = {
	ltr: {
		x: '415%',
		y: '30%',
		scaleX: 1
	},
	rtl: {
		x: '-115%',
		y: '30%',
		scaleX: -1
	}
};

const Airplane = ({ airplaneRef, dir }) => {

	return (
		<motion.svg
			variants={variants}
			initial="rtl"
			animate={dir}
			transition={{
				default: { duration: 5, ease: 'linear' },
				scaleX: { duration: 0 }
			}}
			className="absolute"
			ref={airplaneRef}
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 1920 739"
			width="25%">
			<path
				d="m1365 7379c-38-5-108-20-154-35-72-22-91-33-135-77-164-165-248-490-465-1793-98-584-217-1322-336-2079-41-264-78-492-81-507-6-28-6-28-94-28-71 0-89-3-94-16-8-22-8-64 2-64 4 0 41-7 82-16 88-18 928-190 1350-275 273-55 322-62 679-94 211-19 397-35 412-35s141-55 281-121c898-430 1892-875 2573-1152 107-44 111-47 142-99 48-80 121-158 167-179 51-23 182-25 289-5l76 15 78-31c424-164 1007-355 1398-458 27-7 46-20 60-42 49-77 127-97 219-55l56 26 117-14c80-10 218-15 435-15 362 0 327 11 304-97l-14-63h789 788l11 38 10 39 252 12c139 7 402 21 583 31 214 13 454 20 682 20 396 0 355 9 368-82 5-40 3-48-9-48-9 0-16-4-16-10s40-10 100-10 100 4 100 10-7 10-15 10c-16 0-19 29-8 94l6 39 401-8c221-4 402-8 403-9 2-1-14-44-34-94-20-51-35-94-32-96 2-2 23-1 46 3 38 5 47 14 113 99l71 92h737c405 0 819 3 920 7l182 6v-24c1-65 6-70 84-67l71 3 3 41 3 41 702 6c1073 9 1123 15 1835 203 321 85 579 167 912 291 262 98 316 129 369 212 80 123 76 293-8 459-36 70-88 113-211 173-139 68-207 91-370 124-68 14-127 29-131 33-122 140-288 354-417 538-114 162-240 260-437 340-49 20-92 38-94 40-3 3 8 59 24 125 23 95 26 122 16 128-15 10-121 34-125 29-2-1-30-50-64-108-70-123-49-116-252-77-75 14-205 34-290 43-85 10-162 23-170 29-20 16-134 27-147 14-6-6-76-6-204 1-107 6-230 11-274 13l-80 2-12 125c-6 69-12 126-12 128-1 1-27 2-60 2h-58l-23-125-23-125h-202c-154 0-213 4-245 15-45 16-79 20-45 5 12-5-95-9-261-9l-281-1-44 38c-59 52-72 58-159 71-80 13-335 13-360 1-8-5-51-16-95-25-44-10-127-33-185-51-95-31-116-34-227-34h-123v68c0 37-3 144-7 239l-6 172 24-5c20-3 20-2-3 7l-28 11v121c0 67-3 152-7 190-5 62-8 67-29 67-20 0-24 6-30 50l-7 50h-42c-43 0-43 0-49-42-8-58-36-327-36-357 0-21-3-23-37-18l-38 6 33-11c38-13 37-8 22-203-5-71-13-179-16-238l-6-108-397 4c-274 3-436 9-526 20-190 24-584 45-1050 57-225 6-453 15-505 20-131 13-689 12-868-1-81-5-203-17-272-24-68-8-127-11-131-7-3 4-19 40-33 79l-28 73-396 2c-345 3-397 5-397 18 0 11-14 15-59 17-50 1-59-2-63-18-5-18-24-19-604-19-330 0-599-3-599-7s9-40 21-81c11-40 18-76 16-79-6-6-1593 256-2522 416-600 103-633 110-701 144-80 40-156 95-197 141-33 37-231 429-850 1686-885 1797-912 1852-966 1922-54 71-133 137-191 162-44 18-441 29-545 15zm6232-4366c-3-16-9-56-13-90l-7-63h-42-42l-28 78c-16 42-30 83-33 90-3 9 18 12 83 12h88zm720-47c13-41 26-81 29-90 6-14-25-16-310-16h-316v90 90h288 287zm177 32c-4-24-10-61-13-83l-7-40-24 70c-12 39-25 76-28 83-3 8 8 12 37 12h41zm835-34c12-42 21-77 19-79-2-1-64-10-138-20-112-14-172-16-350-10-143 5-217 11-222 19-4 6-8 46-8 89v77h338 339zm7985-586c14-35 26-65 26-68s-38-4-85-2l-85 3v65 64h58 59zm180 3c25-33 46-62 46-65s-30-6-67-6h-68l-26 65-27 65h49c47 0 49-1 93-59zm117 22c63-67 63-70 30-81-32-11-26-17-95 91-18 27-18 27 6 27 15 0 37-14 59-37zm359-204c50-66 90-122 89-123-4-3-100-36-106-36s-152 227-155 240c-2 10 46 36 73 39 4 1 48-53 99-120zm-157-48c42-65 77-121 77-124s-20-12-44-20l-43-15-69 121c-38 66-70 124-72 128-3 7 42 27 64 28 6 1 45-52 87-118zm-403-37c23-69 40-126 39-127-2-1-51 0-108 3l-104 5-33 120c-19 66-34 121-34 123 0 1 45 2 99 2h99zm220 41c25-44 59-101 74-127l28-48h-105-105l-41 123c-23 67-41 126-41 130s32 7 72 5l72-3zm499-277 41-63-30-9c-16-5-35-6-42-3-12 4-78 115-78 131 0 3 15 6 34 6 30 0 38-6 75-62zm99-162 29-54-36-6c-64-10-68-9-85 41-21 61-21 61 17 66 17 2 35 5 39 5 3 1 20-22 36-52zm-268-178v-188h-70-70v188 187h70 70zm-190 17v-165h-80-80v165 165h80 80zm-8796-1360c99-48 189-67 344-74 75-3 133-10 135-16 1-6-112-11-322-13-279-2-322 0-318 12 3 8 11 34 17 58s13 49 15 56c7 21 54 13 129-23zm1238-80-4-25h-330c-259 0-329 3-326 12 3 10 57 15 199 20 107 4 223 9 259 11s97 4 136 5c71 2 71 2 66-23zm-7597 6119c6-2 178-51 384-109 323-90 401-109 380-91-7 5-753 207-764 205-7 0-7-2 0-5zm780-214c-3-5-2-10 4-10 5 0 13 5 16 10 3 6 2 10-4 10-5 0-13-4-16-10zm35-10c-8-5-10-10-5-10 6 0 17 5 25 10s11 10 5 10c-5 0-17-5-25-10zm40-10c-8-5-10-10-5-10 6 0 17 5 25 10s11 10 5 10c-5 0-17-5-25-10zm70-20c-18-12-2-12 25 0 13 6 15 9 5 9-8 0-22-4-30-9zm58-27c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm70 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm110-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm80 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-10-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm80 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm80 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-57-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm120-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-50-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm90 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-20-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm90 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-60-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm107-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-60-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm123-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-53-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm93 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-70-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm133-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-63-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm110 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-40-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm103 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-73-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm120 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-50-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm113 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-12c11-4 36-11 55-15 24-4 29-3 15 3-11 4-36 11-55 15-24 4-29 3-15-3zm-90-11c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm70-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm123 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-100-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm163-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-93-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm133 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-110-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm173-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-103-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm143 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-120-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm183-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-113-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm153 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-83-23c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm153 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-130-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm177-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-107-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm170 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-140-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm210-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-140-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm180 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-150-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm220-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-150-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm190 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-167-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm230-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-160-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm200 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-130-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm200 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-170-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm217-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-170-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm233-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-180-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm227-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-180-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm243-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-173-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm213 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-190-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm253-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-183-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm230 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-160-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm223 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-193-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm240 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-170-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm233 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-203-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm273-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-203-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm243 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-220-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm283-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-213-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm253 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-183-23c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm253 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-230-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm270 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-200-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm270 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-240-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm287-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-217-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm280 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-250-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm320-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-250-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm290 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-267-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm330-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-260-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm300 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-277-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm340-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-270-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm310 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-263-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm310 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-240-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm303 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-273-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm343-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-273-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm313 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-290-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm353-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-283-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm323 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-253-23c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm323 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-293-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm340 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-270-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm333 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-303-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm350 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-280-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm343 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-313-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm383-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-313-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm353 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-330-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm393-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-330-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm370 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-347-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm410-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-340-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm387-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-317-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm380 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-350-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm397-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-327-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm390 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-360-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm407-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-337-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm400 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-370-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm440-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-370-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm410 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-363-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm410 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-340-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm403 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-373-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm420 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-350-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm413 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-383-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm453-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-383-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm423 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-400-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm463-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-393-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm433 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-410-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm473-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-403-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm450 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-380-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm443 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-413-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm460 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-390-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm453 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-423-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm470 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-400-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm463 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-12c11-4 36-11 55-15 24-4 29-3 15 3-11 4-36 11-55 15-24 4-29 3-15-3zm-447-8c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm70-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm480 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-457-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm520-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-450-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm490 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-467-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm530-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-460-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm500 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-430-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm500 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-470-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm517-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-447-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm510 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-463-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm503 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-433-23c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm503 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-473-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm520 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-450-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm513 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-483-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm530 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-460-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm523 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-500-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm563-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-493-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm533 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-510-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm573-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-503-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm543 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-520-10c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm583-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-513-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm560 1c11-4 36-11 55-15 24-4 29-3 15 3-11 4-36 11-55 15-24 4-29 3-15-3zm-490-21c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm593-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-523-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm570 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-507-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm570 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-540-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm587-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-517-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm580 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-550-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm620-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-550-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm590 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-567-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm630-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-560-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm600 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-530-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm600 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-570-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm610 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-540-20c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm610 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-563-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm603 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-533-23c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm70-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm70-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm70-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm70-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm623 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-593-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm640 0c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-570-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm633 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-12c11-4 36-11 55-15 24-4 29-3 15 3-11 4-36 11-55 15-24 4-29 3-15-3zm-610-11c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm70-20c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm643 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm63-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm63-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-593-23c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm663 3c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-640-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm687-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-617-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm680 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-650-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm697-3c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-627-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm690 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-660-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm730-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-660-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm700 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm-677-7c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm740-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm-670-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm710 0c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm63-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm63-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm40-10c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zm47-13c11-5 27-9 35-9 9 0 8 4-5 9-11 5-27 9-35 9-9 0-8-4 5-9zm63-17c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6z"
				transform="matrix(.1 0 0 -.1 0 739)"
				fill="#000000"
				stroke="none"
				strokeWidth="2"
				vectorEffect="non-scaling-stroke"
			/>
		</motion.svg>
	);
};

export default Airplane;
