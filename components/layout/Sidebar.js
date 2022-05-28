import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import {
	BsCalendar3,
	BsBookmarkStar,
	BsFillPlusSquareFill,
} from 'react-icons/bs';

const Sidebar = () => {
	const router = useRouter();
	return (
		<div className="sidebar">
			<div className="sidebar-menu">
				<ul className="sidebar-list">
					<li
						className={
							router.pathname == '/admin/dashboard'
								? 'active'
								: ''
						}
					>
						<AiOutlineDashboard />
						<Link href="/admin/dashboard">لوحة التحكم</Link>
					</li>
					<li className={router.pathname == '/' ? 'active' : ''}>
						<BsCalendar3 />
						<Link href="/admin/dashboard">جدول الاعمال</Link>
					</li>
					<li className={router.pathname == '/' ? 'active' : ''}>
						<BsBookmarkStar />
						<Link href="/admin/dashboard">الحجوزات</Link>
					</li>
					<li className={router.pathname == '/' ? 'active' : ''}>
						<FiUsers />
						<Link href="/admin/dashboard">المستخدمون</Link>
					</li>
					<li className={router.pathname == '/' ? 'active' : ''}>
						<BsFillPlusSquareFill />
						<Link href="/admin/dashboard">الاضافات</Link>
					</li>
				</ul>
			</div>
			<div className="sidebar-footer">
				<h4>v1.0.0</h4>
			</div>
		</div>
	);
};

export default Sidebar;
