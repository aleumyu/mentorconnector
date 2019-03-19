import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './registerform.css';

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: '',
			firstName: '',
			lastName: '',
			email: '',
			jobType: '',
			industry: '',
			country: '',
			city: '',
			experience: 0,
			role: 0,
			meeting: 10,
			interestCheckBox: [
				{ value: 'Networking', isChecked: false },
				{ value: 'Career Transition', isChecked: false },
				{ value: 'Technical Skills', isChecked: false },
				{ value: 'Leadership', isChecked: false },
				{ value: 'Entrepreneurship', isChecked: false },
				{ value: 'Job Search', isChecked: false }
			],
			formComplete: false
		};
	}

	updateInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	updateSelect(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	updateCheckBox(event) {
		let interestCheckBox = this.state.interestCheckBox;
		interestCheckBox.forEach((e) => {
			if (e.value === event.target.value) {
				e.isChecked = event.target.checked;
			}
		});

		this.setState({
			interestCheckBox: interestCheckBox
		});
	}

	addUser(e) {
		e.preventDefault();
		let interestCheckBox = this.state.interestCheckBox;
		let interestTagArr = [];
		interestCheckBox.forEach((e) => {
			if (e.isChecked) {
				interestTagArr.push(e.value);
			}
		});

		let newUser = {
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			photo: this.state.photo,
			industry: this.state.industry,
			jobType: this.state.jobType,
			years: this.state.experience,
			intro: this.state.intro,
			country: this.state.country,
			city: this.state.city,
			role: this.state.role,
			meeting: this.state.meeting,
			interestTag: interestTagArr
		};
		console.log(newUser);
		fetch('http://localhost:9000/api/v1/users', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					throw Error(res.statusText);
				}
				this.setState({
					formComplete: true
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		if (this.state.formComplete === true) {
			return <Redirect to="/home" />;
		}

		return (
			<div className="App">
				<h2>Register for MentorConnector</h2>
				<p>
					MentorConnector provides mentorship, community and networking for women in technology. We achieve
					this by matching mentors and mentee based on their career path and objectives.
				</p>
				<p>Filling out our membership form will ensure we're able to best match mentors and mentees.</p>

				<form action="" method="post">
					<fieldset>
						<ul>
							<li>
								<label>Upload a photo</label>
								<input
									name="photo"
									type="text"
									placeholder="https://www..."
									onChange={(e) => this.updateInput(e)}
								/>
							</li>

							<li>
								<label>First Name(s)</label>
								<input name="firstName" type="text" onChange={(e) => this.updateInput(e)} />
							</li>

							<li>
								<label>Last Name(s)</label>
								<input name="lastName" type="text" onChange={(e) => this.updateInput(e)} />
							</li>

							<li>
								<label>Email Address ******</label>
								<input name="email" type="text" onChange={(e) => this.updateInput(e)} />
							</li>

							<li>
								<label>What country are you located in?</label>
								<select
									name="country"
									value={this.state.country}
									onChange={(e) => this.updateSelect(e)}
								>
									<option value="selected">Select</option>
									<option value="Afghanistan">Afghanistan (افغانستان)</option>
									<option value="Åland Islands">Åland Islands (Åland)</option>
									<option value="Albania">Albania (Shqipëria)</option>
									<option value="Algeria">Algeria (الجزائر)</option>
									<option value="American Samoa">American Samoa</option>
									<option value="Andorra">Andorra</option>
									<option value="Angola">Angola</option>
									<option value="Anguilla">Anguilla</option>
									<option value="Antarctica">Antarctica</option>
									<option value="Antigua and Barbuda">Antigua and Barbuda</option>
									<option value="Argentina">Argentina</option>
									<option value="Armenia">Armenia (Հայաստանի Հանրապետութիւն)</option>
									<option value="Aruba">Aruba</option>
									<option value="Ascension Island">Ascension Island</option>
									<option value="Australia">Australia</option>
									<option value="Austria">Austria (Österreich)</option>
									<option value="Azerbaijan">Azerbaijan (Azərbaycan)</option>
									<option value="Bahamas">Bahamas</option>
									<option value="Bahrain">Bahrain (البحرين)</option>
									<option value="Bangladesh">Bangladesh (বাংলাদেশ)</option>
									<option value="Barbados">Barbados</option>
									<option value="Belarus">Belarus (Беларусь)</option>
									<option value="Belgium">Belgium (België)</option>
									<option value="Belize">Belize</option>
									<option value="Benin">Benin (Bénin)</option>
									<option value="Bermuda">Bermuda</option>
									<option value="Bhutan">Bhutan (भूटान)</option>
									<option value="Bolivia">Bolivia</option>
									<option value="Bosnia and Herzegovina">
										Bosnia and Herzegovina (Bosna i Hercegovina)
									</option>
									<option value="Botswana">Botswana</option>
									<option value="Bouvet Island">Bouvet Island</option>
									<option value="Brazil">Brazil (Brasil)</option>
									<option value="British Indian Ocean Territory">
										British Indian Ocean Territory
									</option>
									<option value="British Virgin Islands">British Virgin Islands</option>
									<option value="Brunei">Brunei</option>
									<option value="Bulgaria">Bulgaria (България)</option>
									<option value="Burkina Faso">Burkina Faso</option>
									<option value="Burundi">Burundi</option>
									<option value="Cambodia">Cambodia (កម្ពុជា)</option>
									<option value="Cameroon">Cameroon (Cameroun)</option>
									<option value="Canada">Canada</option>
									<option value="Canary Islands">Canary Islands</option>
									<option value="Cape Verde">Cape Verde (Cabo Verde)</option>
									<option value="Caribbean Netherlands">Caribbean Netherlands</option>
									<option value="Cayman Islands">Cayman Islands</option>
									<option value="Central African Republic">
										Central African Republic (République centrafricaine)
									</option>
									<option value="Ceuta and Melilla">Ceuta and Melilla</option>
									<option value="Chad">Chad (تشاد)</option>
									<option value="Chile">Chile</option>
									<option value="China">China (中国)</option>
									<option value="Christmas Island">Christmas Island</option>
									<option value="Clipperton Island">Clipperton Island</option>
									<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
									<option value="Colombia">Colombia</option>
									<option value="Comoros">Comoros (جزر القمر)</option>
									<option value="Congo">Congo</option>
									<option value="Congo">Congo (DRC) (République démocratique du Congo)</option>
									<option value="Cook Islands">Cook Islands</option>
									<option value="Costa Rica">Costa Rica</option>
									<option value="Côte d’Ivoire">Côte d’Ivoire</option>
									<option value="Croatia">Croatia (Hrvatska)</option>
									<option value="Cuba">Cuba</option>
									<option value="Curaçao">Curaçao</option>
									<option value="Cyprus">Cyprus (Κύπρος)</option>
									<option value="Czech Republic">Czech Republic (Česká republika)</option>
									<option value="Denmark">Denmark (Danmark)</option>
									<option value="Diego Garcia">Diego Garcia</option>
									<option value="Djibouti">Djibouti (Jabuuti)</option>
									<option value="Dominica">Dominica</option>
									<option value="Dominican Republic">
										Dominican Republic (República Dominicana)
									</option>
									<option value="Ecuador">Ecuador</option>
									<option value="Egypt">Egypt (مصر)</option>
									<option value="El Salvador">El Salvador</option>
									<option value="Equatorial Guinea">Equatorial Guinea (Guinée équatoriale)</option>
									<option value="Eritrea">Eritrea (ኤርትራ, اريتريا)</option>
									<option value="Estonia">Estonia (Eesti)</option>
									<option value="Ethiopia">Ethiopia (ኢትዮጵያ)</option>
									<option value="Falkland Islands">Falkland Islands</option>
									<option value="Faroe Islands">Faroe Islands (Føroyar)</option>
									<option value="Fiji">Fiji (फिजी)</option>
									<option value="Finland">Finland (Suomi)</option>
									<option value="France">France</option>
									<option value="French Guiana">French Guiana (Guyane française)</option>
									<option value="French Polynesia">French Polynesia (Polynésie française)</option>
									<option value="French Southern Territories">French Southern Territories</option>
									<option value="Gabon">Gabon</option>
									<option value="Gambia">Gambia</option>
									<option value="Georgia">Georgia (საქართველო)</option>
									<option value="Germany">Germany (Deutschland)</option>
									<option value="Ghana">Ghana</option>
									<option value="Gibraltar">Gibraltar</option>
									<option value="Greece">Greece (Ελλάδα)</option>
									<option value="Greenland">Greenland (Kalaallit Nunaat)</option>
									<option value="Grenada">Grenada</option>
									<option value="Guadeloupe">Guadeloupe</option>
									<option value="Guam">Guam</option>
									<option value="Guatemala">Guatemala</option>
									<option value="Guernsey">Guernsey</option>
									<option value="Guinea">Guinea (Guinée)</option>
									<option value="Guinea-Bissau">Guinea-Bissau (Guiné Bissau)</option>
									<option value="Guyana">Guyana</option>
									<option value="Haiti">Haiti (Haïti)</option>
									<option value="Heard &amp; McDonald Islands">Heard &amp; McDonald Islands</option>
									<option value="Honduras">Honduras</option>
									<option value="Hong Kong">Hong Kong (香港)</option>
									<option value="Hungary">Hungary (Magyarország)</option>
									<option value="Iceland">Iceland (Ísland)</option>
									<option value="India">India (भारत)</option>
									<option value="Indonesia">Indonesia</option>
									<option value="Iran">Iran (ایران)</option>
									<option value="Iraq">Iraq (العراق)</option>
									<option value="Ireland">Ireland</option>
									<option value="Isle of Man">Isle of Man</option>
									<option value="Israel">Israel (ישראל)</option>
									<option value="Italy">Italy (Italia)</option>
									<option value="Jamaica">Jamaica</option>
									<option value="Japan">Japan (日本)</option>
									<option value="Jersey">Jersey</option>
									<option value="Jordan">Jordan (الأردن)</option>
									<option value="Kazakhstan">Kazakhstan (Казахстан)</option>
									<option value="Kenya">Kenya</option>
									<option value="Kiribati">Kiribati</option>
									<option value="Kosovo">Kosovo</option>
									<option value="Kuwait">Kuwait (الكويت)</option>
									<option value="Kyrgyzstan">Kyrgyzstan (Кыргызстан)</option>
									<option value="Laos">Laos (ลาว)</option>
									<option value="Latvia">Latvia (Latvija)</option>
									<option value="Lebanon">Lebanon (لبنان)</option>
									<option value="Lesotho">Lesotho</option>
									<option value="Liberia">Liberia</option>
									<option value="Libya">Libya (ليبيا)</option>
									<option value="Liechtenstein">Liechtenstein</option>
									<option value="Lithuania">Lithuania (Lietuva)</option>
									<option value="Luxembourg">Luxembourg</option>
									<option value="Macau">Macau (澳门)</option>
									<option value="Macedonia">Macedonia (FYROM) (Македонија)</option>
									<option value="Madagascar">Madagascar</option>
									<option value="Malawi">Malawi</option>
									<option value="Malaysia">Malaysia</option>
									<option value="Maldives">Maldives</option>
									<option value="Mali">Mali (مالي)</option>
									<option value="Malta">Malta</option>
									<option value="Marshall Islands">Marshall Islands</option>
									<option value="Martinique">Martinique</option>
									<option value="Mauritania">Mauritania (موريتانيا)</option>
									<option value="Mauritius">Mauritius</option>
									<option value="Mayotte">Mayotte</option>
									<option value="Mexico">Mexico (México)</option>
									<option value="Micronesia">Micronesia</option>
									<option value="Moldova">Moldova</option>
									<option value="Monaco">Monaco</option>
									<option value="Mongolia">Mongolia (Монгол улс)</option>
									<option value="Montenegro">Montenegro (Црна Гора)</option>
									<option value="Montserrat">Montserrat</option>
									<option value="Morocco">Morocco (المغرب)</option>
									<option value="Mozambique">Mozambique (Moçambique)</option>
									<option value="Myanmar">Myanmar (Burma)</option>
									<option value="Namibia">Namibia</option>
									<option value="Nauru">Nauru</option>
									<option value="Nepal">Nepal (नेपाल)</option>
									<option value="Netherlands">Netherlands (Nederland)</option>
									<option value="Netherlands Antilles">
										Netherlands Antilles (Nederlandse Antillen)
									</option>
									<option value="New Caledonia">New Caledonia (Nouvelle-Calédonie)</option>
									<option value="New Zealand">New Zealand</option>
									<option value="Nicaragua">Nicaragua</option>
									<option value="Niger">Niger</option>
									<option value="Nigeria">Nigeria</option>
									<option value="Niue">Niue</option>
									<option value="Norfolk Island">Norfolk Island</option>
									<option value="North Korea">North Korea (조선 민주주의 인민 공화국)</option>
									<option value="Northern Mariana Islands">Northern Mariana Islands</option>
									<option value="Norway">Norway (Norge)</option>
									<option value="Oman">Oman (عمان)</option>
									<option value="Outlying Oceania">Outlying Oceania</option>
									<option value="Pakistan">Pakistan (پاکستان)</option>
									<option value="Palau">Palau</option>
									<option value="Palestine">Palestine (فلسطين)</option>
									<option value="Panama">Panama (Panamá)</option>
									<option value="Papua New Guinea">Papua New Guinea</option>
									<option value="Paraguay">Paraguay</option>
									<option value="Peru">Peru (Perú)</option>
									<option value="Philippines">Philippines</option>
									<option value="Pitcairn Islands">Pitcairn Islands</option>
									<option value="Poland">Poland (Polska)</option>
									<option value="Portugal">Portugal</option>
									<option value="Puerto Rico">Puerto Rico</option>
									<option value="Qatar">Qatar (قطر)</option>
									<option value="Réunion">Réunion</option>
									<option value="Romania">Romania (România)</option>
									<option value="Russia">Russia (Россия)</option>
									<option value="Rwanda">Rwanda</option>
									<option value="Saint Barthélemy">Saint Barthélemy</option>
									<option value="Saint Helena">Saint Helena</option>
									<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
									<option value="Saint Lucia">Saint Lucia</option>
									<option value="Saint Martin">Saint Martin</option>
									<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
									<option value="Samoa">Samoa</option>
									<option value="San Marino">San Marino</option>
									<option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
									<option value="Saudi Arabia">Saudi Arabia (المملكة العربية السعودية)</option>
									<option value="Senegal">Senegal (Sénégal)</option>
									<option value="Serbia">Serbia (Србија)</option>
									<option value="Seychelles">Seychelles</option>
									<option value="Sierra Leone">Sierra Leone</option>
									<option value="Singapore">Singapore (新加坡)</option>
									<option value="Sint Maarten">Sint Maarten</option>
									<option value="Slovakia">Slovakia (Slovenská republika)</option>
									<option value="Slovenia">Slovenia (Slovenija)</option>
									<option value="Solomon Islands">Solomon Islands</option>
									<option value="Somalia">Somalia (Somali)</option>
									<option value="South Africa">South Africa</option>
									<option value="South Georgia &amp; South Sandwich Islands">
										South Georgia &amp; South Sandwich Islands
									</option>
									<option value="South Korea">South Korea (대한민국)</option>
									<option value="South Sudan">South Sudan</option>
									<option value="Spain">Spain (España)</option>
									<option value="Sri Lanka">Sri Lanka (இலங்கை)</option>
									<option value="St. Vincent &amp; Grenadines">St. Vincent &amp; Grenadines</option>
									<option value="Sudan">Sudan (السودان)</option>
									<option value="Suriname">Suriname</option>
									<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
									<option value="Swaziland">Swaziland</option>
									<option value="Sweden">Sweden (Sverige)</option>
									<option value="Switzerland">Switzerland (Schweiz, Suisse, Svizzera)</option>
									<option value="Syria">Syria (سوريا)</option>
									<option value="Taiwan">Taiwan (台湾)</option>
									<option value="Tajikistan">Tajikistan (تاجیکستان)</option>
									<option value="Tanzania">Tanzania</option>
									<option value="Thailand">Thailand (ประเทศไทย)</option>
									<option value="Timor-Leste">Timor-Leste</option>
									<option value="Togo">Togo</option>
									<option value="Tokelau">Tokelau</option>
									<option value="Tonga">Tonga</option>
									<option value="Trinidad and Tobago">Trinidad and Tobago</option>
									<option value="Tristan da Cunha">Tristan da Cunha</option>
									<option value="Tunisia">Tunisia (تونس)</option>
									<option value="Turkey">Turkey (Türkiye)</option>
									<option value="Turkmenistan">Turkmenistan (Туркменистан)</option>
									<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
									<option value="Tuvalu">Tuvalu</option>
									<option value="U.S. Outlying Islands">
										U.S. Outlying Islands (United States Minor Outlying Islands)
									</option>
									<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
									<option value="Uganda">Uganda</option>
									<option value="Ukraine">Ukraine (Україна)</option>
									<option value="United Arab Emirates">
										United Arab Emirates (الامارات العربية المتحدة)
									</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="United States">United States</option>
									<option value="Uruguay">Uruguay</option>
									<option value="Uzbekistan">Uzbekistan (Ўзбекистон)</option>
									<option value="Vanuatu">Vanuatu</option>
									<option value="Vatican City">Vatican City (Vaticano)</option>
									<option value="Venezuela">Venezuela</option>
									<option value="Vietnam">Vietnam (Việt Nam)</option>
									<option value="Wallis and Futuna">Wallis and Futuna</option>
									<option value="Western Sahara">Western Sahara (الصحراء الغربية)</option>
									<option value="Yemen">Yemen (اليمن)</option>
									<option value="Zambia">Zambia</option>
									<option value="Zimbabwe">Zimbabwe</option>
								</select>
							</li>

							<li>
								<label>What city are you located in?</label>
								<input name="city" type="text" onChange={(e) => this.updateInput(e)} />
							</li>

							<li>
								<label>What is your career path?</label>
								<select
									name="industry"
									value={this.state.industry}
									onChange={(e) => this.updateSelect(e)}
								>
									<option value="Select">Select</option>
									<option value="Advertising">Advertising</option>
									<option value="Back-end development">Back-end development</option>
									<option value="Business development">Business development</option>
									<option value="Civil engineering">Civil engineering</option>
									<option value="Community management">Community management</option>
									<option value="Customer success">Customer success</option>
									<option value="Database administration">Database administration</option>
									<option value="Data science">Data science</option>
									<option value="Design (UX/UI)">Design (UX/UI)</option>
									<option value="Entrepreneurship">Entrepreneurship</option>
									<option value="Finance">Finance</option>
									<option value="Front-end development">Front-end development</option>
									<option value="Full stack development">Full stack development</option>
									<option value="Hardware engineering">Hardware engineering</option>
									<option value="Human computer interaction">Human computer interaction</option>
									<option value="Human resources">Human resources</option>
									<option value="Information technology (general)">
										Information technology (general)
									</option>
									<option value="Legal">Legal</option>
									<option value="Marketing">Marketing</option>
									<option value="Mobile app development">Mobile app development</option>
									<option value="Operations">Operations</option>
									<option value="Product management">Product management</option>
									<option value="Program management">Program management</option>
									<option value="Project management">Project management</option>
									<option value="Public relations">Public relations</option>
									<option value="Research">Research</option>
									<option value="Robotics">Robotics</option>
									<option value="Sales">Sales</option>
									<option value="System security">System security</option>
									<option value="Software engineering">Software engineering</option>
									<option value="System administration">System administration</option>
									<option value="Quality assurance">Quality assurance</option>
									<option value="Other">Other</option>
								</select>
								<p>Select the option that best describes your focus in technology.</p>
							</li>

							<li>
								<label>What is your job title?</label>
								<input name="jobType" type="text" onChange={(e) => this.updateInput(e)} />
							</li>

							<li>
								<label>What is your experience level?</label>
								<select
									name="experience"
									value={this.state.experience}
									onChange={(e) => this.updateSelect(e)}
								>
									<option value="0">Student / New graduate (0 years)</option>
									<option value="5">Early career (0-5 years)</option>
									<option value="10">Mid level (6-10 years)</option>
									<option value="1010">Established (11+ years)</option>
								</select>
								<p>How would you define your level of expertise in your career path?</p>
							</li>

							<li>
								<label>Would you like to be a mentor or mentee?</label>
								<select name="role" value={this.state.role} onChange={(e) => this.updateSelect(e)}>
									<option value="0">Select</option>
									<option value="1">Mentor</option>
									<option value="2">Mentee</option>
									<option value="3">Both</option>
								</select>
							</li>

							<li>
								<label>How would you like to meet with your mentor/mentee?</label>
								<select
									name="meeting"
									value={this.state.meeting}
									onChange={(e) => this.updateSelect(e)}
								>
									<option value="0">Select</option>
									<option value="10">In person</option>
									<option value="20">Virtually</option>
									<option value="30">Both</option>
								</select>
							</li>

							<li>
								<label>How do you hope to benefit from this mentorship program?</label>
								<div className="form-group">
									<ul>
										<li className="form-group">
											<input
												className="form-group"
												type="checkbox"
												value="Networking"
												onChange={(e) => this.updateCheckBox(e)}
											/>{' '}
											Networking
										</li>{' '}
										<br />
										<li className="form-group">
											<input
												className="form-group"
												type="checkbox"
												value="Career Transition"
												onChange={(e) => this.updateCheckBox(e)}
											/>{' '}
											Career Transition
										</li>{' '}
										<br />
										<li className="form-group">
											<input
												className="form-group"
												type="checkbox"
												value="Technical Skills"
												onChange={(e) => this.updateCheckBox(e)}
											/>{' '}
											Technical Skills
										</li>{' '}
										<br />
										<li className="form-group">
											<input
												className="form-group"
												type="checkbox"
												value="Leadership"
												onChange={(e) => this.updateCheckBox(e)}
											/>{' '}
											Leadership
										</li>{' '}
										<br />
										<li className="form-group">
											<input
												className="form-group"
												type="checkbox"
												value="Entrepreneurship"
												onChange={(e) => this.updateCheckBox(e)}
											/>{' '}
											Entrepreneurship
										</li>{' '}
										<br />
										<li className="form-group">
											<input
												className="form-group"
												type="checkbox"
												value="Networking"
												onChange={(e) => this.updateCheckBox(e)}
											/>{' '}
											Job Search
										</li>{' '}
										<br />
									</ul>
								</div>
							</li>

							<li>
								<label>Introduce yourself and what kind of match you are hoping to find.</label>
								<textarea name="intro" cols="70" rows="10" onChange={(e) => this.updateInput(e)} />
							</li>

							<button value="Submit" id="submit" type="submit" onClick={(e) => this.addUser(e)}>
								Update my Profile
							</button>
						</ul>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default RegisterForm;
