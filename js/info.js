function loader() {
	let id = new URL(window.location.href).searchParams.get("id");
	let lang = new URL(window.location.href).searchParams.get("lang");
	nobel_database.forEach((item) => {
		let container = document.getElementById("resultsContainer");
		if (item["id"] == id) {
			if (lang == "en" || lang == null || lang == "") {
				container.innerHTML = `
				<select
					onchange="window.location = 'https://saberhosneydev.github.io/nobel/info.html?id='+${id}+'&lang='+this[this.selectedIndex].value;"
					style="float: right;"
				>
					<option value="en" selected>English</option>
					<option value="se">Swedish</option>
				</select>
				<h3>${item["fullName"]["en"]}</h3>
				<p>
					<span class="section_title">Birth:</span>
				</p>
				<p>
				${item["gender"] == "male" ? "Mr." : "Lady"} ${
					item["familyName"]["en"]
				} was born on ${item["birth"]["date"].substring(0, 4)} in ${
					item["birth"]["place"]["city"]["en"]
				}, ${item["birth"]["place"]["country"]["en"]}, ${
					item["birth"]["place"]["continent"]["en"]
				}.
				</p>
				`;
				if (item.hasOwnProperty("death")) {
					container.innerHTML += `
					<p>
					<span class="section_title">Death:</span>
				</p>
				<p>
				${item["gender"] == "male" ? "Mr." : "Lady"} ${
						item["familyName"]["en"]
					} died on ${item["death"]["date"].substring(0, 4)} in ${
						item["death"]["place"]["city"]["en"]
					}, ${item["death"]["place"]["country"]["en"]}, ${
						item["death"]["place"]["continent"]["en"]
					}.
				</p>
					`;
				}
				container.innerHTML += `
				<p>
					<span class="section_title">Prizes:</span>
				</p>`;
				item["nobelPrizes"].forEach((prize) => {
					container.innerHTML += `
					<p>
					in ${prize["awardYear"]} ${item["familyName"]["en"]} received ${
						prize["categoryFullName"]["en"]
					} ${prize["motivation"]["en"]}
				</p>
                    ${
						prize.hasOwnProperty("affiliations")
							? "<p><span class='section_title'>Affiliations:</span></p>" +
							  prize["affiliations"][0]["name"]["en"] +
							  ", " +
							  prize["affiliations"][0]["city"]["en"] +
							  ", " +
							  prize["affiliations"][0]["country"]["en"] +
							  "."
							: ""
					}`;
				});
				container.innerHTML += `<br><br><p>
					<a
						href="http://google.com/search?q=${item["fullName"]["en"]}"
						target="_blank"
						>Find more on google</a
					>
					or share it on
					<a
						href="#"
						target="popup"
						onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://saberhosneydev.github.io/nobel/info.html?id=${item["id"]}','popup','width=600,height=400'); return false;"
						>facebook</a
					>
					/
					<a
						href="#"
						target="popup"
						onclick="window.open('https://twitter.com/intent/tweet?text=${item["knownName"]["en"]} - The Nobel ${item["nobelPrizes"][0]["category"]["en"]} Prize - ${item["nobelPrizes"][0]["awardYear"]}. read more on https://saberhosneydev.github.io/nobel/info.html?id=${item["id"]}','popup','width=600,height=400'); return false;"
						>twitter</a
					>
				</p>`;
			} else if (lang == "se") {
				container.innerHTML = `
				<select
					onchange="window.location = 'https://saberhosneydev.github.io/nobel/info.html?id='+${id}+'&lang='+this[this.selectedIndex].value;"
					style="float: right;"
				>
					<option value="en">English</option>
					<option value="se" selected>Swedish</option>
				</select>
				<h3>${item["fullName"]["se"]}</h3>
				<p>
					<span class="section_title">Födelse:</span>
				</p>
				<p>
				${item["gender"] == "male" ? "Mr." : "Lady"} ${
					item["familyName"]["se"]
				} föddes den ${item["birth"]["date"].substring(0, 4)} i ${
					item["birth"]["place"]["city"]["se"]
				}, ${item["birth"]["place"]["country"]["se"]}, ${
					item["birth"]["place"]["continent"]["en"]
				}.
				</p>
				`;
				if (item.hasOwnProperty("death")) {
					container.innerHTML += `
					<p>
					<span class="section_title">Död:</span>
				</p>
				<p>
				${item["gender"] == "male" ? "Mr." : "Lady"} ${
						item["familyName"]["se"]
					} dog på ${item["death"]["date"].substring(0, 4)} i ${
						item["death"]["place"]["city"]["se"]
					}, ${item["death"]["place"]["country"]["se"]}, ${
						item["death"]["place"]["continent"]["en"]
					}.
				</p>
					`;
				}
				container.innerHTML += `
				<p>
					<span class="section_title">Pris:</span>
				</p>`;
				item["nobelPrizes"].forEach((prize) => {
					container.innerHTML += `
					<p>
					i ${prize["awardYear"]} ${item["familyName"]["se"]} mottagen ${
						prize["categoryFullName"]["se"]
					} ${
						prize["motivation"].hasOwnProperty("se")
							? prize["motivation"]["se"]
							: prize["motivation"]["en"]
					}
				</p>
                    ${
						prize.hasOwnProperty("affiliations")
							? "<p><span class='section_title'>Tillhörighet:</span></p>" +
							  prize["affiliations"][0]["name"]["se"] +
							  ", " +
							  prize["affiliations"][0]["city"]["se"] +
							  ", " +
							  prize["affiliations"][0]["country"]["se"] +
							  "."
							: ""
					}`;
				});
				container.innerHTML += `<br><br><p>
					<a
						href="http://google.com/search?q=${item["fullName"]["en"]}"
						target="_blank"
						>hitta mer på google</a
					>
					eller dela det på
					<a
						href="#"
						target="popup"
						onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://saberhosneydev.github.io/nobel/info.html?id=${item["id"]}','popup','width=600,height=400'); return false;"
						>facebook</a
					>
					/
					<a
						href="#"
						target="popup"
						onclick="window.open('https://twitter.com/intent/tweet?text=${item["knownName"]["en"]} - The Nobel ${item["nobelPrizes"][0]["category"]["en"]} Prize - ${item["nobelPrizes"][0]["awardYear"]}. read more on https://saberhosneydev.github.io/nobel/info.html?id=${item["id"]}','popup','width=600,height=400'); return false;"
						>twitter</a
					>
				</p>`;
			}
		}
	});
}
