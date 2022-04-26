import type { NextPage } from 'next';
import Script from 'next/script'
import Head from 'next/head';
import { Col, Row, Typography, List, Divider, Space } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import {
	PhoneOutlined,
	MailOutlined,
	ClockCircleOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const serviceData = [
  'ศูนย์บริการยางครบวงจร',
  'บริการตรวจเช็คสภาพรถยนต์',
  'เบรค',
  'โช๊คอัพ',
	'ใส้กรอง',
];

const socialData = [{
	name: 'ststyrecenter',
	linkIcon: '/img/fb-icon.webp',
	link: 'https://www.facebook.com/ststyrecenter',
}, {
	name: 'LINE',
	linkIcon: '/img/line-icon.webp',
	link: 'http://line.me/ti/p/@lbb2631z',
	}]

const brandData = [{
	name: 'YOKOHAMA',
	linkIcon: '/img/logo/yokohama.webp',
}, {
	name: 'GOOD YEAR',
	linkIcon: '/img/logo/good-year.webp',
}, {
	name: 'MICHELIN',
	linkIcon: '/img/logo/michelin.webp',
}, {
	name: 'BRIDGESTONE',
	linkIcon: '/img/logo/bridgestone.webp',
}, {
	name: 'MAXXIS',
	linkIcon: '/img/logo/maxxis.webp',
}, {
	name: 'FLAKEN',
	linkIcon: '/img/logo/flaken.webp',
}, {
	name: 'Castrol',
	linkIcon: '/img/logo/castrol.webp',
}, {
	name: 'TOKICO',
	linkIcon: '/img/logo/tokico.webp',
}, {
	name: 'LENSO',
	linkIcon: '/img/logo/lenso.webp',
	}];

const headerTitle = `ศูนย์ยางรถยนต์ STS เอกชัย บางบอน
	บริการทุกระดับประทับใจ มีปัญหาเรื่องรถ เรื่องยาง ยินดีให้คำปรึกษา`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          ศูนย์ยางรถยนต์ STS เอกชัย บางบอน | STS SMART TYRE SERVICE CO., LTD.
        </title>
				<meta property="og:title" content="ศูนย์ยางรถยนต์ STS เอกชัย บางบอน | STS SMART TYRE SERVICE CO., LTD." />
				<meta name="description" content="ยางรถยนต์ ช่วงล่าง เปลี่ยนถ่าย น้ำมันเครื่อง ตั้งศูนย์ ยินดีบริการครับ" />
				<meta property="og:image" content="https://ststyrecenter.com/img/fav/apple-icon-180x180.png" />

				<meta property="og:image:width" content="96" />
				<meta property="og:image:height" content="96" />
				<meta property="og:url" content="https://ststyrecenter.com" />
				<meta property="og:site_name" content="ststyrecenter" />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="th_TH" />
				<link rel="canonical" href="https://ststyrecenter.com"></link>
				<link rel="icon" href="/favicon.ico" />

				<meta property="og:url" content="https://ststyrecenter.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="ศูนย์ยางรถยนต์ STS เอกชัย บางบอน | STS SMART TYRE SERVICE CO., LTD." />
				<meta property="og:description" content="ยางรถยนต์ ช่วงล่าง เปลี่ยนถ่าย น้ำมันเครื่อง ตั้งศูนย์ ยินดีบริการครับ" />
				<meta property="og:image" content="https://ststyrecenter.com/img/fav/apple-icon-180x180.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ststyrecenter.com" />
				<meta property="twitter:url" content="https://ststyrecenter.com/" />
				<meta name="twitter:title" content="ศูนย์ยางรถยนต์ STS เอกชัย บางบอน | STS SMART TYRE SERVICE CO., LTD." />
				<meta name="twitter:description" content="ยางรถยนต์ ช่วงล่าง เปลี่ยนถ่าย น้ำมันเครื่อง ตั้งศูนย์ ยินดีบริการครับ" />
				<meta name="twitter:image" content="https://ststyrecenter.com/img/fav/apple-icon-180x180.png" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/img/fav/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/img/fav/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/img/fav/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/img/fav/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/img/fav/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/img/fav/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/img/fav/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/img/fav/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/fav/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/img/fav/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/img/fav/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/fav/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
      <Layout>
        <Header>
          <Row align="middle">
            <Col xs={24} sm={24} md={3}>
              <Title
                level={1}
                className="text-center"
                style={{ marginBottom: 0 }}
              >
                <img
                  src="/img/fav/ms-icon-310x310.png"
                  alt="STS SMART TYRE SERVICE CO., LTD."
                  className="logo"
                />
              </Title>
            </Col>
            <Col xs={24} sm={24} md={11}>
              <Title level={3} className="title-desc">
                ศูนย์ยางรถยนต์ STS เอกชัย บางบอน
                <br />
								บริการทุกระดับประทับใจ<br/>
								มีปัญหาเรื่องรถ เรื่องยาง ยินดีให้คำปรึกษา
              </Title>
            </Col>
						<Col xs={24} sm={24} md={10} className="contactus-header">
							<Space size={'small'} split={<Divider type="vertical" />}>
								<PhoneOutlined />
								<a href="tel:0925369151">
									092-536-9151
								</a>
								<a href="tel:0961499969">
									096-149-9969
								</a>
							</Space><br/>
							{socialData.map((item) => {
								return (<a
									href={item.link}
									target="_blank"
									rel="noreferrer"
									key={`social-header-${item.name}`}
									style={{marginRight: '1rem'}}
								>
									<img src={item.linkIcon} />
									&nbsp;&nbsp;&nbsp;{item.name}
								</a>
								)
							})}
            </Col>
          </Row>
        </Header>

        <Content>
          <Row className="main-section section">
            <Col xs={24} sm={12} md={12} className="text-center">
              <img
                src="/img/promotion/promo-bank-credit.webp"
                className="img-responsive"
                style={{ marginBottom: '1rem' }}
              />
            </Col>
						<Col xs={24} sm={12} md={12}>
              <iframe
                className="video-stream"
								title="STS SMART TYRE SERVICE CO., LTD."
                src="https://www.youtube.com/embed/e_8B0GAvOGw?autoplay=1&loop=1&mute=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
          <Row className="service-detail-section section bg-red">
            <Col xs={24} sm={12} md={14}>
              <Title level={2} className="p-title color-white">
                ศูนย์บริการยางครบวงจร
              </Title>
              <Paragraph
                className="color-white p-content"
                style={{ maxWidth: '500px' }}
              >
                บริการยางรถยนต์ทุกยี่ห้อชั้นนำ Yokohama Michelin Bridgestone
                Dunlop Goodyear Nexen GTRadial Maxxis และ
                ยี่ห้อชั้นนำอีกหลากหลาย
              </Paragraph>

              <Title level={2} className="p-title color-white">
                อุปกรณ์อะไหล่รถยนต์
              </Title>
              <Paragraph
                className="color-white p-content"
                style={{ maxWidth: '500px' }}
              >
                เบรค, โช้คอัพ, น้ำมันเครื่อง, ลูกหมาก และอื่นๆ
              </Paragraph>

              <Title level={2} className="p-title color-white">
                บริการตรวจเช็คสภาพรถยนต์
              </Title>
              <Paragraph
                className="color-white p-content"
                style={{ maxWidth: '500px' }}
              >
                เช็คระยะทาง เปลี่ยนถ่ายน้ำมันเครื่อง ตั่งศูนย์ถ่วงล้อ ระบบเบรค ช่วงล่าง และอีกหลากหลายบริการ
							</Paragraph>
							<div className="service-list-section">
								<Row justify="center" className="bg-white text-center border-radis-1">
									<Col flex={1} className="pad-1 text-center">
										<img src="/img/service/tyre-icon.webp" alt="ยาง" className="img-tyre-icon"  />
										<Title level={5}>ยาง</Title>
									</Col>
									<Col flex={1} className="pad-1 text-center">
										<img src="/img/service/break-icon.webp" alt="เบรค" />
										<Title level={5}>เบรค</Title>
									</Col>
									<Col flex={1} className="pad-1 text-center">
										<img src="/img/service/chockup-icon.webp" alt="โช๊คอัพ" />
										<Title level={5}>โช๊คอัพ</Title>
									</Col>
									<Col flex={1} className="pad-1 text-center">
										<img src="/img/service/setup-icon.webp" alt="ตั้งศูนย์ระบบคอมพิวเตอร์" />
										<Title level={5}>ตั้งศูนย์ระบบ<br/>คอมพิวเตอร์</Title>
									</Col>
									<Col flex={1} className="pad-1 text-center">
										<img src="/img/service/oil-icon.webp" alt="น้ำมันเครื่อง/เกียร์" />
										<Title level={5}>น้ำมันเครื่อง<br/>เกียร์</Title>
									</Col>
								</Row>
							</div>
            </Col>
            <Col xs={24} sm={12} md={10}>
              <div id="fb-root"></div>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/ststyrecenter"
                data-width="500"
                data-height="800"
								data-small-header="false"
								data-show-posts="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
              >
                <blockquote
                  cite="https://www.facebook.com/ststyrecenter"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/ststyrecenter">
                    ศูนย์ยางรถยนต์ STS เอกชัย บางบอน
                  </a>
                </blockquote>
              </div>
						</Col>
						<Col span={24}>
							<Title level={2} className="text-center color-white" style={{paddingTop: '2rem'}}>ที่ตั้งศูนย์บริการยางรถยนต์ STS เอกชัย บางบอน</Title>
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe width="70%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%97%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B8%AA%20%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C%20%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%8A%E0%B8%B1%E0%B8%A2%20%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%99&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
								</div>
							</div>
						</Col>
          </Row>

          <Row
            className="brand-section section"
            id="brand-section"
            align="middle"
          >
            <Col span={24}>
              <Title level={2}>สินค้าแบรนด์คุณภาพ</Title>
            </Col>
            {brandData.map((item) => {
              return (
                <Col xs={12} sm={12} md={8} key={`brand-${item.name}`}>
                  <img src={item.linkIcon} width="320" className="img-brand" />
                </Col>
              );
            })}
          </Row>
          <Row className="contactus-section section" id="contactus-section">
            <Col xs={24} sm={24} md={8}>
              <Title level={3} className="color-white">
                <PhoneOutlined /> โทร
              </Title>
              <Paragraph className="color-white">
                <Space size={'small'} split={<Divider type="vertical" />}>
                  <a href="tel:0925369151" className="color-white">
                    092-536-9151
                  </a>
                  <a href="tel:0961499969" className="color-white">
                    096-149-9969
                  </a>
                </Space>
              </Paragraph>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Title level={3} className="color-white">
                <MailOutlined /> EMAIL
              </Title>
              <Paragraph className="color-white">
                <a
                  href="mailto:sts.smarttyreservice@gmail.com"
                  className="color-white"
                >
                  sts.smarttyreservice@gmail.com
                </a>
              </Paragraph>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Title level={3} className="color-white">
                <ClockCircleOutlined /> เวลาทำการ
              </Title>
              <Paragraph className="color-white">
                จันทร์ - เสาร์ : 8.00 น. - 18.00 น.
              </Paragraph>
            </Col>
          </Row>
        </Content>

        <Footer>
          <Row className="social-media-section section">
            <Col xs={24} sm={24} md={8}>
              <Title level={4} className="color-white">
                Social Media
              </Title>
              <List
                className="color-white"
                dataSource={socialData}
                split={false}
                renderItem={(item) => (
                  <List.Item>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="color-white"
                    >
                      <img src={item.linkIcon} />
                      &nbsp;&nbsp;&nbsp;{item.name}
                    </a>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} sm={24} md={8} id="service-section">
              <Title level={4} className="color-white">
                บริการของเรา
              </Title>
              <List
                className="color-white"
                dataSource={serviceData}
                split={false}
                renderItem={(item) => <List.Item> - {item}</List.Item>}
              />
            </Col>
            <Col xs={24} sm={24} md={8} id="address-section">
              <Title level={4} className="color-white">
                ที่อยู่
              </Title>
              <Text className="color-white">{`อาคารเลขที่ 59 ซอยเอกชัย 83/1
							(พระราม 2 ซอย 54) แขวงคลองบางบอน เขตบางบอน กรุงเทพมหานคร`}</Text>
            </Col>
            <Col xs={24} span={24} className="copyright text-center">
              &copy; 2018 by STS SMART TYRE SERVICE CO., LTD.
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
