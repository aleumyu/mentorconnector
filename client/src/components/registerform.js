import React, { Component } from 'react';
import './registerform.css';


class RegisterForm extends Component {

  constructor(props) {
    super(props);
  }
/*

  updateInput = (event) => {
    //handleChange
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addUser(e) {
    e.preventDefault();
    //handleSubmit
    // add review to database
    let newUser = {

      //need to reference email to link this user to the one in the previous register screen
      firstName: this.state.,
      lastName: this.state.,
      photo: 
      industry: this.state.,
      jobTitle: this.state.,
      exoerience: this.state.,
      intro: this.state.,
      country: this.state.,
      city: this.state.,
      role: this.state.,
      meeting: this.state.,

      
    }

    fetch("http://localhost:9000/api/v1/users", {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser) 
    })
    .then (res => { 
      if (!res.ok) {
        throw Error(res.statusText);
      }
    })
    .catch(error => {
      console.log(error)
    });
  }

  */


  render() {
    return (
      <div className="App">

      <title>Join the Women Techmakers program – Google</title>
      <h2>Register for MentorConnector</h2>
      <p>MentorConnector provides mentorship, community and networking for women in technology. We achieve this by matching mentors and mentee based on their career path and objectives.</p>
      <p>Filling out our membership form will ensure we're able to best match mentors and mentees.</p>
      
    <form action="" method="post">
      <fieldset>
        <ul>
        <li>
            <label>Upload a photo</label>
            <input name="photo" type="text" placeholder="https://www..."/>
          </li>

          <li>
            <label>First Name(s)</label>
            <input name="firstName" type="text" />
          </li>
    
          <li>
            <label>Last Name(s)</label>
            <input name="lastName" type="text" />
          </li>
    
          <li>
            <label>Email Address ******</label>
            <input name="email" type="text" />
          </li>
    
          <li>
            <label>What country are you located in?</label>
            <select name="country">
              <option value="selected">Select …</option>
              <option value="AF: Afghanistan">Afghanistan (افغانستان)</option>
              <option value="AX: Åland Islands">Åland Islands (Åland)</option>
              <option value="AL: Albania">Albania (Shqipëria)</option>
              <option value="DZ: Algeria">Algeria (الجزائر)</option>
              <option value="AS: American Samoa">American Samoa</option>
              <option value="AD: Andorra">Andorra</option>
              <option value="AO: Angola">Angola</option>
              <option value="AI: Anguilla">Anguilla</option>
              <option value="AQ: Antarctica">Antarctica</option>
              <option value="AG: Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="AR: Argentina">Argentina</option>
              <option value="AM: Armenia">Armenia (Հայաստանի Հանրապետութիւն)</option>
              <option value="AW: Aruba">Aruba</option>
              <option value="AC: Ascension Island">Ascension Island</option>
              <option value="AU: Australia">Australia</option>
              <option value="AT: Austria">Austria (Österreich)</option>
              <option value="AZ: Azerbaijan">Azerbaijan (Azərbaycan)</option>
              <option value="BS: Bahamas">Bahamas</option>
              <option value="BH: Bahrain">Bahrain (البحرين)</option>
              <option value="BD: Bangladesh">Bangladesh (বাংলাদেশ)</option>
              <option value="BB: Barbados">Barbados</option>
              <option value="BY: Belarus">Belarus (Беларусь)</option>
              <option value="BE: Belgium">Belgium (België)</option>
              <option value="BZ: Belize">Belize</option>
              <option value="BJ: Benin">Benin (Bénin)</option>
              <option value="BM: Bermuda">Bermuda</option>
              <option value="BT: Bhutan">Bhutan (भूटान)</option>
              <option value="BO: Bolivia">Bolivia</option>
              <option value="BA: Bosnia and Herzegovina">Bosnia and Herzegovina (Bosna i Hercegovina)</option>
              <option value="BW: Botswana">Botswana</option>
              <option value="BV: Bouvet Island">Bouvet Island</option>
              <option value="BR: Brazil">Brazil (Brasil)</option>
              <option value="IO: British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="VG: British Virgin Islands">British Virgin Islands</option>
              <option value="BN: Brunei">Brunei</option>
              <option value="BG: Bulgaria">Bulgaria (България)</option>
              <option value="BF: Burkina Faso">Burkina Faso</option>
              <option value="BI: Burundi">Burundi</option>
              <option value="KH: Cambodia">Cambodia (កម្ពុជា)</option>
              <option value="CM: Cameroon">Cameroon (Cameroun)</option>
              <option value="CA: Canada">Canada</option>
              <option value="IC: Canary Islands">Canary Islands</option>
              <option value="CV: Cape Verde">Cape Verde (Cabo Verde)</option>
              <option value="BQ: Caribbean Netherlands">Caribbean Netherlands</option>
              <option value="KY: Cayman Islands">Cayman Islands</option>
              <option value="CF: Central African Republic">Central African Republic (République centrafricaine)</option>
              <option value="EA: Ceuta and Melilla">Ceuta and Melilla</option>
              <option value="TD: Chad">Chad (تشاد)</option>
              <option value="CL: Chile">Chile</option>
              <option value="CN: China">China (中国)</option>
              <option value="CX: Christmas Island">Christmas Island</option>
              <option value="CP: Clipperton Island">Clipperton Island</option>
              <option value="CC: Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="CO: Colombia">Colombia</option>
              <option value="KM: Comoros">Comoros (جزر القمر)</option>
              <option value="CG: Congo">Congo</option>
              <option value="CD: Congo">Congo (DRC) (République démocratique du Congo)</option>
              <option value="CK: Cook Islands">Cook Islands</option>
              <option value="CR: Costa Rica">Costa Rica</option>
              <option value="CI: Côte d’Ivoire">Côte d’Ivoire</option>
              <option value="HR: Croatia">Croatia (Hrvatska)</option>
              <option value="CU: Cuba">Cuba</option>
              <option value="CW: Curaçao">Curaçao</option>
              <option value="CY: Cyprus">Cyprus (Κύπρος)</option>
              <option value="CZ: Czech Republic">Czech Republic (Česká republika)</option>
              <option value="DK: Denmark">Denmark (Danmark)</option>
              <option value="DG: Diego Garcia">Diego Garcia</option>
              <option value="DJ: Djibouti">Djibouti (Jabuuti)</option>
              <option value="DM: Dominica">Dominica</option>
              <option value="DO: Dominican Republic">Dominican Republic (República Dominicana)</option>
              <option value="EC: Ecuador">Ecuador</option>
              <option value="EG: Egypt">Egypt (مصر)</option>
              <option value="SV: El Salvador">El Salvador</option>
              <option value="GQ: Equatorial Guinea">Equatorial Guinea (Guinée équatoriale)</option>
              <option value="ER: Eritrea">Eritrea (ኤርትራ, اريتريا)</option>
              <option value="EE: Estonia">Estonia (Eesti)</option>
              <option value="ET: Ethiopia">Ethiopia (ኢትዮጵያ)</option>
              <option value="FK: Falkland Islands">Falkland Islands</option>
              <option value="FO: Faroe Islands">Faroe Islands (Føroyar)</option>
              <option value="FJ: Fiji">Fiji (फिजी)</option>
              <option value="FI: Finland">Finland (Suomi)</option>
              <option value="FR: France">France</option>
              <option value="GF: French Guiana">French Guiana (Guyane française)</option>
              <option value="PF: French Polynesia">French Polynesia (Polynésie française)</option>
              <option value="TF: French Southern Territories">French Southern Territories</option>
              <option value="GA: Gabon">Gabon</option>
              <option value="GM: Gambia">Gambia</option>
              <option value="GE: Georgia">Georgia (საქართველო)</option>
              <option value="DE: Germany">Germany (Deutschland)</option>
              <option value="GH: Ghana">Ghana</option>
              <option value="GI: Gibraltar">Gibraltar</option>
              <option value="GR: Greece">Greece (Ελλάδα)</option>
              <option value="GL: Greenland">Greenland (Kalaallit Nunaat)</option>
              <option value="GD: Grenada">Grenada</option>
              <option value="GP: Guadeloupe">Guadeloupe</option>
              <option value="GU: Guam">Guam</option>
              <option value="GT: Guatemala">Guatemala</option>
              <option value="GG: Guernsey">Guernsey</option>
              <option value="GN: Guinea">Guinea (Guinée)</option>
              <option value="GW: Guinea-Bissau">Guinea-Bissau (Guiné Bissau)</option>
              <option value="GY: Guyana">Guyana</option>
              <option value="HT: Haiti">Haiti (Haïti)</option>
              <option value="HM: Heard &amp; McDonald Islands">Heard &amp; McDonald Islands</option>
              <option value="HN: Honduras">Honduras</option>
              <option value="HK: Hong Kong">Hong Kong (香港)</option>
              <option value="HU: Hungary">Hungary (Magyarország)</option>
              <option value="IS: Iceland">Iceland (Ísland)</option>
              <option value="IN: India">India (भारत)</option>
              <option value="ID: Indonesia">Indonesia</option>
              <option value="IR: Iran">Iran (ایران)</option>
              <option value="IQ: Iraq">Iraq (العراق)</option>
              <option value="IE: Ireland">Ireland</option>
              <option value="IM: Isle of Man">Isle of Man</option>
              <option value="IL: Israel">Israel (ישראל)</option>
              <option value="IT: Italy">Italy (Italia)</option>
              <option value="JM: Jamaica">Jamaica</option>
              <option value="JP: Japan">Japan (日本)</option>
              <option value="JE: Jersey">Jersey</option>
              <option value="JO: Jordan">Jordan (الأردن)</option>
              <option value="KZ: Kazakhstan">Kazakhstan (Казахстан)</option>
              <option value="KE: Kenya">Kenya</option>
              <option value="KI: Kiribati">Kiribati</option>
              <option value="XK: Kosovo">Kosovo</option>
              <option value="KW: Kuwait">Kuwait (الكويت)</option>
              <option value="KG: Kyrgyzstan">Kyrgyzstan (Кыргызстан)</option>
              <option value="LA: Laos">Laos (ลาว)</option>
              <option value="LV: Latvia">Latvia (Latvija)</option>
              <option value="LB: Lebanon">Lebanon (لبنان)</option>
              <option value="LS: Lesotho">Lesotho</option>
              <option value="LR: Liberia">Liberia</option>
              <option value="LY: Libya">Libya (ليبيا)</option>
              <option value="LI: Liechtenstein">Liechtenstein</option>
              <option value="LT: Lithuania">Lithuania (Lietuva)</option>
              <option value="LU: Luxembourg">Luxembourg</option>
              <option value="MO: Macau">Macau (澳门)</option>
              <option value="MK: Macedonia">Macedonia (FYROM) (Македонија)</option>
              <option value="MG: Madagascar">Madagascar</option>
              <option value="MW: Malawi">Malawi</option>
              <option value="MY: Malaysia">Malaysia</option>
              <option value="MV: Maldives">Maldives</option>
              <option value="ML: Mali">Mali (مالي)</option>
              <option value="MT: Malta">Malta</option>
              <option value="MH: Marshall Islands">Marshall Islands</option>
              <option value="MQ: Martinique">Martinique</option>
              <option value="MR: Mauritania">Mauritania (موريتانيا)</option>
              <option value="MU: Mauritius">Mauritius</option>
              <option value="YT: Mayotte">Mayotte</option>
              <option value="MX: Mexico">Mexico (México)</option>
              <option value="FM: Micronesia">Micronesia</option>
              <option value="MD: Moldova">Moldova</option>
              <option value="MC: Monaco">Monaco</option>
              <option value="MN: Mongolia">Mongolia (Монгол улс)</option>
              <option value="ME: Montenegro">Montenegro (Црна Гора)</option>
              <option value="MS: Montserrat">Montserrat</option>
              <option value="MA: Morocco">Morocco (المغرب)</option>
              <option value="MZ: Mozambique">Mozambique (Moçambique)</option>
              <option value="MM: Myanmar">Myanmar (Burma)</option>
              <option value="NA: Namibia">Namibia</option>
              <option value="NR: Nauru">Nauru</option>
              <option value="NP: Nepal">Nepal (नेपाल)</option>
              <option value="NL: Netherlands">Netherlands (Nederland)</option>
              <option value="AN: Netherlands Antilles">Netherlands Antilles (Nederlandse Antillen)</option>
              <option value="NC: New Caledonia">New Caledonia (Nouvelle-Calédonie)</option>
              <option value="NZ: New Zealand">New Zealand</option>
              <option value="NI: Nicaragua">Nicaragua</option>
              <option value="NE: Niger">Niger</option>
              <option value="NG: Nigeria">Nigeria</option>
              <option value="NU: Niue">Niue</option>
              <option value="NF: Norfolk Island">Norfolk Island</option>
              <option value="KP: North Korea">North Korea (조선 민주주의 인민 공화국)</option>
              <option value="MP: Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="NO: Norway">Norway (Norge)</option>
              <option value="OM: Oman">Oman (عمان)</option>
              <option value="QO: Outlying Oceania">Outlying Oceania</option>
              <option value="PK: Pakistan">Pakistan (پاکستان)</option>
              <option value="PW: Palau">Palau</option>
              <option value="PS: Palestine">Palestine (فلسطين)</option>
              <option value="PA: Panama">Panama (Panamá)</option>
              <option value="PG: Papua New Guinea">Papua New Guinea</option>
              <option value="PY: Paraguay">Paraguay</option>
              <option value="PE: Peru">Peru (Perú)</option>
              <option value="PH: Philippines">Philippines</option>
              <option value="PN: Pitcairn Islands">Pitcairn Islands</option>
              <option value="PL: Poland">Poland (Polska)</option>
              <option value="PT: Portugal">Portugal</option>
              <option value="PR: Puerto Rico">Puerto Rico</option>
              <option value="QA: Qatar">Qatar (قطر)</option>
              <option value="RE: Réunion">Réunion</option>
              <option value="RO: Romania">Romania (România)</option>
              <option value="RU: Russia">Russia (Россия)</option>
              <option value="RW: Rwanda">Rwanda</option>
              <option value="BL: Saint Barthélemy">Saint Barthélemy</option>
              <option value="SH: Saint Helena">Saint Helena</option>
              <option value="KN: Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="LC: Saint Lucia">Saint Lucia</option>
              <option value="MF: Saint Martin">Saint Martin</option>
              <option value="PM: Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
              <option value="WS: Samoa">Samoa</option>
              <option value="SM: San Marino">San Marino</option>
              <option value="ST: São Tomé and Príncipe">São Tomé and Príncipe</option>
              <option value="SA: Saudi Arabia">Saudi Arabia (المملكة العربية السعودية)</option>
              <option value="SN: Senegal">Senegal (Sénégal)</option>
              <option value="RS: Serbia">Serbia (Србија)</option>
              <option value="SC: Seychelles">Seychelles</option>
              <option value="SL: Sierra Leone">Sierra Leone</option>
              <option value="SG: Singapore">Singapore (新加坡)</option>
              <option value="SX: Sint Maarten">Sint Maarten</option>
              <option value="SK: Slovakia">Slovakia (Slovenská republika)</option>
              <option value="SI: Slovenia">Slovenia (Slovenija)</option>
              <option value="SB: Solomon Islands">Solomon Islands</option>
              <option value="SO: Somalia">Somalia (Somali)</option>
              <option value="ZA: South Africa">South Africa</option>
              <option value="GS: South Georgia &amp; South Sandwich Islands">South Georgia &amp; South Sandwich Islands</option>
              <option value="KR: South Korea">South Korea (대한민국)</option>
              <option value="SS: South Sudan">South Sudan</option>
              <option value="ES: Spain">Spain (España)</option>
              <option value="LK: Sri Lanka">Sri Lanka (இலங்கை)</option>
              <option value="VC: St. Vincent &amp; Grenadines">St. Vincent &amp; Grenadines</option>
              <option value="SD: Sudan">Sudan (السودان)</option>
              <option value="SR: Suriname">Suriname</option>
              <option value="SJ: Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
              <option value="SZ: Swaziland">Swaziland</option>
              <option value="SE: Sweden">Sweden (Sverige)</option>
              <option value="CH: Switzerland">Switzerland (Schweiz, Suisse, Svizzera)</option>
              <option value="SY: Syria">Syria (سوريا)</option>
              <option value="TW: Taiwan">Taiwan (台湾)</option>
              <option value="TJ: Tajikistan">Tajikistan (تاجیکستان)</option>
              <option value="TZ: Tanzania">Tanzania</option>
              <option value="TH: Thailand">Thailand (ประเทศไทย)</option>
              <option value="TL: Timor-Leste">Timor-Leste</option>
              <option value="TG: Togo">Togo</option>
              <option value="TK: Tokelau">Tokelau</option>
              <option value="TO: Tonga">Tonga</option>
              <option value="TT: Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="TA: Tristan da Cunha">Tristan da Cunha</option>
              <option value="TN: Tunisia">Tunisia (تونس)</option>
              <option value="TR: Turkey">Turkey (Türkiye)</option>
              <option value="TM: Turkmenistan">Turkmenistan (Туркменистан)</option>
              <option value="TC: Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="TV: Tuvalu">Tuvalu</option>
              <option value="UM: U.S. Outlying Islands">U.S. Outlying Islands (United States Minor Outlying Islands)</option>
              <option value="VI: U.S. Virgin Islands">U.S. Virgin Islands</option>
              <option value="UG: Uganda">Uganda</option>
              <option value="UA: Ukraine">Ukraine (Україна)</option>
              <option value="AE: United Arab Emirates">United Arab Emirates (الامارات العربية المتحدة)</option>
              <option value="GB: United Kingdom">United Kingdom</option>
              <option value="US: United States">United States</option>
              <option value="UY: Uruguay">Uruguay</option>
              <option value="UZ: Uzbekistan">Uzbekistan (Ўзбекистон)</option>
              <option value="VU: Vanuatu">Vanuatu</option>
              <option value="VA: Vatican City">Vatican City (Vaticano)</option>
              <option value="VE: Venezuela">Venezuela</option>
              <option value="VN: Vietnam">Vietnam (Việt Nam)</option>
              <option value="WF: Wallis and Futuna">Wallis and Futuna</option>
              <option value="EH: Western Sahara">Western Sahara (الصحراء الغربية)</option>
              <option value="YE: Yemen">Yemen (اليمن)</option>
              <option value="ZM: Zambia">Zambia</option>
              <option value="ZW: Zimbabwe">Zimbabwe</option>
              </select>
          </li>
    
          <li>
            <label>What city are you located in?</label>
            <input name="city" type="text" />
          </li>

          <li>
            <label>What is your career path?</label>    
            <select name="industry">
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
              <option value="Information technology (general)">Information technology (general)</option>
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
            <input name="jobType" type="text" />
          </li>
          
          <li>
            <label>What is your experience level?</label>
            <select name="experience">
              <option value="Early career (0-5 years)">Student / New graduate (0 years)</option>
              <option value="Early career (0-5 years)">Early career (0-5 years)</option>
              <option value="Mid level (6-10 years)">Mid level (6-10 years)</option>
              <option value="Established (11+ years)">Established (11+ years)</option>
            </select>
            <p>How would you define your level of expertise in your career path?</p>
          </li>
    
          <li>
            <label>Would you like to be a mentor or mentee?</label>
            <select name="role">
              <option value="0">Select</option>
              <option value="1">Mentor</option>
              <option value="2">Mentee</option>
              <option value="3">Both</option>
            </select>
          </li>

          <li>
            <label>How would you like to meet with your mentor/mentee?</label>
            <select name="meeting">
              <option value="0">Select</option>
              <option value="1">In person</option>
              <option value="2">Virtually</option>
              <option value="3">Both</option>
            </select>
          </li>


          <li>
            <label>How do you hope to benefit from this mentorship program?</label>
            <div className="form-group">
              <ul>
                <li className="form-group"><input className="form-group" type="checkbox" value="Networking" /> Networking</li> <br />
                <li className="form-group"><input className="form-group" type="checkbox" value="Career Transition" /> Career Transition</li> <br />
                <li className="form-group"><input className="form-group" type="checkbox" value="Technical Skills" /> Technical Skills</li> <br />
                <li className="form-group"><input className="form-group" type="checkbox" value="Leadership" /> Leadership</li> <br />
                <li className="form-group"><input className="form-group" type="checkbox" value="Entrepreneurship" /> Entrepreneurship</li> <br />
                <li className="form-group"><input className="form-group" type="checkbox" value="Networking" /> Job Search</li>  <br />
              </ul>  
            </div>
          </li>

          <li>
            <label>Introduce yourself and what kind of match you are hoping to find.</label>
            <textarea name="intro" cols="70" rows="10"></textarea>
          </li>

          <button value="Submit" id="submit" type="submit">Update my Profile</button>
        
    
        </ul>
      </fieldset>
    </form>
  
</div>

    );
  }
}

export default RegisterForm;