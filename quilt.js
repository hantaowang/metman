var HaProxy = require("github.com/quilt/haproxy").Haproxy;
var Mongo = require("github.com/quilt/mongo");
var Node = require("github.com/quilt/nodejs");

// AWS
var namespace = createDeployment({});

var baseMachine = new Machine({
    provider: "Amazon",
    cpu: new Range(1),
    ram: new Range(2),
    sshKeys: githubKeys("hantaowang"),
});
namespace.deploy(baseMachine.asMaster());
namespace.deploy(baseMachine.asWorker().replicate(3));

var mongo = new Mongo(3);
var app = new Node({
  nWorker: 3,
  repo: "https://github.com/hantaowang/hantaowang.github.io",
  env: {
    PORT: "80",
    MONGO_URI: mongo.uri("hantaowang.github.io")
  }
});
var haproxy = new HaProxy(3, app.services());

// Places all haproxy containers on separate Worker VMs.
// This is just for convenience for the example instructions, as it allows us to
// access the web application by using the IP address of any Worker VM.
haproxy.service.place(new LabelRule(true, haproxy.service));

mongo.connect(mongo.port, app);
app.connect(mongo.port, mongo);
haproxy.public();

namespace.deploy(app);
namespace.deploy(mongo);
namespace.deploy(haproxy);
