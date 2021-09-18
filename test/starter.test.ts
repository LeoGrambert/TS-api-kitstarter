import { Server } from "@hapi/hapi";
import { describe, it, beforeEach, afterEach } from "mocha";
import { expect } from "chai";

import { init } from "../src/core/server";

describe("server greets people", async () => {
	let server: Server;

	beforeEach((done) => {
		init().then(s => { server = s; done(); });
	})
	afterEach((done) => {
		server.stop().then(() => done());
	});

	it("says hello to stranger", async () => {
		const res = await server.inject({
			method: "get",
			url: "/api/v1/hello"
		});
		expect(res.statusCode).to.equal(200);
		expect(res.result).to.equal("Hi 👋");
	});

	it("says hello to a person", async () => {
		const res = await server.inject({
			method: "get",
			url: "/api/v1/hello/leo"
		});
		expect(res.statusCode).to.equal(200);
		expect(res.result).to.equal("Hi Leo");
	});
})
