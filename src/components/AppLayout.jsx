import { Layout, Menu, Button, theme } from 'antd';
import { useState } from 'react';
import { GrHome, GrMenu, GrClose } from 'react-icons/gr';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { PiTelevisionSimple } from 'react-icons/pi';
import { FaGripfire } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import { BsFillBookmarkStarFill } from 'react-icons/bs';

import { NavLink, Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;

function AppLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className='font-sans bg-black text-white'>
      <Sider
        trigger={null}
        collapsible
        theme=''
        width='16rem'
        collapsed={collapsed}
        className='ant-sider min-h-[100vh]'>
        <img
          src='culturex.svg'
          className='py-[1rem] text-center'
        />
        <Menu
          className='font-san bg-inherit flex flex-col gap-12 items-center justify-center'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: (
                <FaGripfire
                  size={22}
                  color='white'
                  className='focus:bg-red-600'
                />
              ),
              label: (
                <NavLink
                  to='/'
                  className='nav-text'>
                  Discover
                </NavLink>
              ),
            },
            {
              key: '2',
              icon: (
                <MdOutlineLocalMovies
                  size={22}
                  color='white'
                />
              ),
              label: (
                <NavLink
                  to='movies'
                  className='nav-text'>
                  Movies
                </NavLink>
              ),
            },
            {
              key: '4',
              icon: (
                <PiTelevisionSimple
                  size={22}
                  color='white'
                />
              ),
              label: (
                <NavLink
                  to='shows'
                  className='nav-text'>
                  Shows
                </NavLink>
              ),
            },
            {
              key: '5',
              icon: (
                <BsFillBookmarkStarFill
                  size={22}
                  color='white'
                />
              ),
              label: (
                <NavLink
                  to='bookmarks'
                  className='nav-text'>
                  Bookmarks
                </NavLink>
              ),
            },
            {
              key: '6',
              icon: (
                <FaEye
                  size={22}
                  color='white'
                />
              ),
              label: (
                <NavLink
                  to='watchedList'
                  className='nav-text'>
                  Watched List
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>

      <Layout className='font-sans'>
        <Button
          className='absolute'
          type='text'
          icon={
            collapsed ? (
              <GrMenu
                color='white'
                size={25}
              />
            ) : (
              <GrClose
                color='white'
                size={25}
              />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <Content className='bg-[#282128] text-white'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
