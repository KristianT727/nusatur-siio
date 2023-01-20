import React from "react";
import { Container } from "react-bootstrap";
import Cardrekomendasi from "./Cardrekomendasi";
import { DETAIL } from "../routes";
import "../styles/detailarticle.css";

import gwk from "../img/gwk.jpg";
import imgbali1 from "../img/imgbali1.png";
import imgbali2 from "../img/imgbali2.png";
import imgbali3 from "../img/imgbali3.png";
import artikel4 from "../img/artikel4.png";

const Detailarticle = () => {
	return (
		<Container className="py-4">
			<div className="row my-4 article">
				<div className="col-md-8 col-sm-12">
					<h1 className="text-center w-75">
						GARUDA WISNU KENCANA, Ikon Peradaban
					</h1>
					<div className="redline"></div>
				</div>
			</div>
			<div className="row my-4 article">
				<div className="col-md-8 col-sm-12">
					<img src={artikel4} alt="Artikel IMG" className="artikelimg" />
					<p className="pt-3">
						Terbentuk dari perbukitan terjal di Bukit Peninsula Bali, patung
						Garuda Wisnu Kencana yang megah berdiri mengawasi pulau itu. Patung
						yang menjulang tinggi adalah landmark paling ikonik di Bali dan
						menggambarkan Dewa Hindu Wisnu, di atas tunggangannya, elong mitose
						Garuda. Garuda adalah lambang nasional Indonesia, simbol abadi
						kebebasan dari penindasan. Menjulang setinggi lebih dari 120 meter,
						ini adalah salah satu patung monumental tertinggi di dunia, lebih
						tinggi dari Patung Liberty dan Kristus Penebus.
						<br />
						<img src={gwk} alt="Artikel IMG" className="artikelimgfloat" />
						Patung tersebut menjadi fitur utama yang menakjubkan dari GWK, taman
						budaya seluas 60 hektar yang menarik pengunjung dari seluruh dunia
						dan memberikan pandangan sekilas tentang warisan menarik Bali
						melalui pertunjukan budaya yang menarikf cerita rakyat legendaris,
						patung besar, dan presentasi sinematik yang dramatis. Nikmati
						pemandangan pulau yang indah saat Anda menjelajahi taman dengan
						berjalan kaki atau dengan Segway. Manjakan diri dengan masakan
						warisan Indonesia, benamkan diri Anda di negeri yang penuh dengan
						mitologi, atau rencanakan acara besar Anda berikutnya di salah satu
						tempat epik GWK. Patung Garuda Wisnu Kencana menggambarkan Wisnu
						mengendarai Garuda. Dalam mitologi Hindu, Dewa Wisnu dipandang
						sebagai pelindung alam semesta, sementara pendampingnya yang
						terpercaya, Garuda yang mirip elang yang perkasa melambangkan
						kesetiaan dan pengabdian tanpa pamrih. Kencana artinya emas, dan
						keduanya dihiasi mahkota mozaik emas. Garuda juga merupakan lambang
						negara Indonesia dan melambangkan kemerdekaan. Dirancang oleh
						seniman terkenal Bali Nyoman Nuarta, patung ini terbuat dari tembaga
						dan kuningan dan memiliki 754 modul dengan 25 segmen baja dengan
						berat 900 ton, dengan berat baja 1300 ton. Patung dan tumpuan
						setinggi 120,9 meter dengan lebar 64 meter berkat lebar sayap
						Garuda.
					</p>
				</div>
				<div className="col-md-4 col-sm-12">
					<h4>Rekomendasi Paket</h4>
					<Cardrekomendasi
						img={imgbali1}
						title="Paket Bali A 1 Hari"
						price="Start from Rp245.000"
						to={DETAIL}
					/>
					<Cardrekomendasi
						img={imgbali2}
						title="Paket Bali B 1 Hari"
						price="Start from Rp475.000"
						to={DETAIL}
					/>
					<Cardrekomendasi
						img={imgbali3}
						title="Paket Bali C 3 Hari"
						price="Start from Rp475.000"
						to={DETAIL}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Detailarticle;
