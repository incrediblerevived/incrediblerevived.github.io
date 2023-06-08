var map = {
    title: "Bridge of Peril",
    song: "env2",
    maker: "skilledandkilled",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00007000000000000001, 0.56007, -311.91992999999997], [0, -1.57, 0], [10, 1, 10], 0.0, 100000.0, 0, 0.6, false);
        a.p([-0.9998600000000001, 0.00014000000000000001, -44.99986], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([1.00021, 0.00021, -49.999790000000004], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([1.00028, 0.00028000000000000003, -54.999719999999996], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([-0.99965, 0.00035000000000000005, -59.99965], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([0.00042, 0.00042, -74.99958], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([0.00049, 0.00049, -79.99951], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([0, 0, -70], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([1.00007, 0.00007000000000000001, -94.99993], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([-0.9998600000000001, 0.00014000000000000001, -64.99986], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([0.00021, 0.00021, -84.99978999999999], [0, 0, 0], [2, 2, 0.6], 0.0, 999999.0, 0, 0.6, false);
        a.p([0.00028000000000000003, -0.9997199999999999, -48.999719999999996], [0, 0, 0], [1, 1, 100], 0.0, 0, 0, 0.6, false);
        a.p([1.00035, -0.60965, -48.99965], [0, 0, 0.79], [1, 1, 100], 0.0, 0, 0, 0.6, false);
        a.p([-0.99958, -0.60958, -48.999579999999995], [0, 0, 0.79], [1, 1, 100], 0.0, 0, 0, 0.6, false);
        a.p([0.00049, -0.7995099999999999, -164.56951], [0, 0, 0], [0.6, 1, 10], 0.0, 0, 0, 0.6, false);
        a.p([0, -0.79, -153.54], [0, 0, 0], [6, 1, 14], 0.0, 0, 0, 0.6, false);
        a.p([0.00007000000000000001, -0.7899299999999999, -175.64992999999998], [0, 0, 0], [6, 1, 14], 0.0, 0, 0, 0.6, false);
        a.p([0.00014000000000000001, -0.79986, -186.76986], [0, 0, -0.44], [2, 0.6, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00021, -0.78979, -197.49979], [0, 0, 0], [6, 1, 14], 0.0, 0, 0, 0.6, false);
        a.p([0.00028000000000000003, 0.00028000000000000003, -79.99972], [0, 0, 0], [2, 2, 0.2], 0.0, 0, 0, 0.6, false);
        a.p([0.00035000000000000005, -0.7896500000000001, -122.27965], [0, 0, 0], [6, 1, 50], 0.0, 0, 0, 0.6, false);
        a.p([0.00042, -0.79958, -209.23958], [0, 0, -0.79], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00049, -0.7895099999999999, -221.15951], [0, 0, 0], [6, 1, 14], 0.0, 0, 0, 0.6, false);
        a.p([0, -0.8, -232.78], [-0.26, 0, -0.79], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00007000000000000001, -0.7899299999999999, -243.68992999999998], [0, 0, 0], [20, 1, 14], 0.0, 0, 0, 0.6, false);
        a.p([0.00014000000000000001, -0.93986, -255.84986], [0, 0, -0.35], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00021, -0.79979, -264.68979], [0, 0, 0.03], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00028000000000000003, -0.79972, -273.68972], [0, 0, -0.79], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00035000000000000005, -0.7996500000000001, -282.72965], [0, 0, -1.38], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00042, -0.79958, -290.85958], [0, 0, 0.66], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([0.00049, -0.7995099999999999, -299.70951], [0, 0, 1.05], [2, 2, 10], 0.0, 0, 0, 0.6, false);
        a.p([-9, 5.37, -318.59], [0, 0, -1.57], [20, 1, 40], 0.0, 0, 0, 0.6, false);
        a.p([9.00007, 5.370069999999999, -316.93993], [0, 0, -1.57], [20, 1, 40], 0.0, 0, 0, 0.6, false);
        a.p([0.00014000000000000001, -0.78986, -318.25986], [0, 0, 0], [20, 1, 30], 0.0, 0, 0, 0.6, false);
        a.c([0.00021, 0.09021000000000001, -10.99979], false);
        a.c([0.00028000000000000003, 0.09027999999999992, -20.999720000000003], false);
        a.c([0.00035000000000000005, 0.09034999999999993, -24.999650000000003], false);
        a.c([0.00042, 0.09041999999999994, -12.999580000000002], false);
        a.c([0.00049, 0.09048999999999996, -16.99951], false);
        a.c([0, 0.08999999999999997, -15], false);
        a.c([0.00007000000000000001, 0.09006999999999998, -18.99993], false);
        a.c([0.00014000000000000001, 0.09014, -22.999859999999998], false);
        a.c([0.00021, 0.09021000000000001, -30.999789999999997], false);
        a.c([0.00028000000000000003, 0.09027999999999992, -34.99972], false);
        a.c([0.00035000000000000005, 0.09034999999999993, -26.999650000000003], false);
        a.c([0.00042, 0.09041999999999994, -28.99958], false);
        a.c([0.00049, 0.09048999999999996, -32.99951], false);
        a.c([0, 0.08999999999999997, -37], false);
        a.c([2.00007, 0.30007, -114.99993], false);
        a.c([-0.9998600000000001, 0.30013999999999996, -124.99986000000001], false);
        a.c([1.00021, 0.30021, -114.99978999999999], false);
        a.c([-0.9997199999999999, 0.30028, -114.99972], false);
        a.c([-1.99965, 0.30035, -124.99965], false);
        a.c([-1.99958, 0.30042, -144.99958], false);
        a.c([0.00049, 0.30049, -124.99950999999999], false);
        a.c([1, 0.3, -125], false);
        a.c([1.00007, 0.30007, -134.99993], false);
        a.c([2.00014, 0.30013999999999996, -134.99986], false);
        a.c([0.00021, 0.30021, -114.99978999999999], false);
        a.c([0.00028000000000000003, 0.30028, -134.99972], false);
        a.c([1.00035, 0.30035, -144.99965], false);
        a.c([0.00042, 0.30042, -144.99958], false);
        a.c([-0.9995099999999999, 0.30049, -144.99951], false);
        a.c([2.82, 0.3, -135], false);
        a.c([-2.90993, 0.30007, -124.99993], false);
        a.c([2.87014, 0.30013999999999996, -114.99986000000001], false);
        a.c([1.9302099999999998, 0.30021, -144.99979], false);
        a.e([0.49028, 0.46027999999999997, -328.91972000000004]);
    },
    post: function() {
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00007000000000000001, 0.56007, -311.91992999999997], [0, -1.57, 0], [10, 1, 10]);
        a.re('P1', [-0.9998600000000001, 0.00014000000000000001, -44.99986], [0, 0, 0], [2, 2, 0.6]);
        a.re('P2', [1.00021, 0.00021, -49.999790000000004], [0, 0, 0], [2, 2, 0.6]);
        a.re('P3', [1.00028, 0.00028000000000000003, -54.999719999999996], [0, 0, 0], [2, 2, 0.6]);
        a.re('P4', [-0.99965, 0.00035000000000000005, -59.99965], [0, 0, 0], [2, 2, 0.6]);
        a.re('P5', [0.00042, 0.00042, -74.99958], [0, 0, 0], [2, 2, 0.6]);
        a.re('P6', [0.00049, 0.00049, -79.99951], [0, 0, 0], [2, 2, 0.6]);
        a.re('P7', [0, 0, -70], [0, 0, 0], [2, 2, 0.6]);
        a.re('P8', [1.00007, 0.00007000000000000001, -94.99993], [0, 0, 0], [2, 2, 0.6]);
        a.re('P9', [-0.9998600000000001, 0.00014000000000000001, -64.99986], [0, 0, 0], [2, 2, 0.6]);
        a.re('P10', [0.00021, 0.00021, -84.99978999999999], [0, 0, 0], [2, 2, 0.6]);
        a.re('P11', [0.00028000000000000003, -0.9997199999999999, -48.999719999999996], [0, 0, 0], [1, 1, 100]);
        a.re('P12', [1.00035, -0.60965, -48.99965], [0, 0, 0.79], [1, 1, 100]);
        a.re('P13', [-0.99958, -0.60958, -48.999579999999995], [0, 0, 0.79], [1, 1, 100]);
        a.re('P14', [0.00049, -0.7995099999999999, -164.56951], [0, 0, 0], [0.6, 1, 10]);
        a.re('P15', [0, -0.79, -153.54], [0, 0, 0], [6, 1, 14]);
        a.re('P16', [0.00007000000000000001, -0.7899299999999999, -175.64992999999998], [0, 0, 0], [6, 1, 14]);
        a.re('P17', [0.00014000000000000001, -0.79986, -186.76986], [0, 0, -0.44], [2, 0.6, 10]);
        a.re('P18', [0.00021, -0.78979, -197.49979], [0, 0, 0], [6, 1, 14]);
        a.re('P19', [0.00028000000000000003, 0.00028000000000000003, -79.99972], [0, 0, 0], [2, 2, 0.2]);
        a.re('P20', [0.00035000000000000005, -0.7896500000000001, -122.27965], [0, 0, 0], [6, 1, 50]);
        a.re('P21', [0.00042, -0.79958, -209.23958], [0, 0, -0.79], [2, 2, 10]);
        a.re('P22', [0.00049, -0.7895099999999999, -221.15951], [0, 0, 0], [6, 1, 14]);
        a.re('P23', [0, -0.8, -232.78], [-0.26, 0, -0.79], [2, 2, 10]);
        a.re('P24', [0.00007000000000000001, -0.7899299999999999, -243.68992999999998], [0, 0, 0], [20, 1, 14]);
        a.re('P25', [0.00014000000000000001, -0.93986, -255.84986], [0, 0, -0.35], [2, 2, 10]);
        a.re('P26', [0.00021, -0.79979, -264.68979], [0, 0, 0.03], [2, 2, 10]);
        a.re('P27', [0.00028000000000000003, -0.79972, -273.68972], [0, 0, -0.79], [2, 2, 10]);
        a.re('P28', [0.00035000000000000005, -0.7996500000000001, -282.72965], [0, 0, -1.38], [2, 2, 10]);
        a.re('P29', [0.00042, -0.79958, -290.85958], [0, 0, 0.66], [2, 2, 10]);
        a.re('P30', [0.00049, -0.7995099999999999, -299.70951], [0, 0, 1.05], [2, 2, 10]);
        a.re('P31', [-9, 5.37, -318.59], [0, 0, -1.57], [20, 1, 40]);
        a.re('P32', [9.00007, 5.370069999999999, -316.93993], [0, 0, -1.57], [20, 1, 40]);
        a.re('P33', [0.00014000000000000001, -0.78986, -318.25986], [0, 0, 0], [20, 1, 30]);
        a.re('C0', [0.00021, 0.09021000000000001, -10.99979], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [0.00028000000000000003, 0.09027999999999992, -20.999720000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [0.00035000000000000005, 0.09034999999999993, -24.999650000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [0.00042, 0.09041999999999994, -12.999580000000002], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [0.00049, 0.09048999999999996, -16.99951], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [0, 0.08999999999999997, -15], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [0.00007000000000000001, 0.09006999999999998, -18.99993], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [0.00014000000000000001, 0.09014, -22.999859999999998], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [0.00021, 0.09021000000000001, -30.999789999999997], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [0.00028000000000000003, 0.09027999999999992, -34.99972], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [0.00035000000000000005, 0.09034999999999993, -26.999650000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [0.00042, 0.09041999999999994, -28.99958], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [0.00049, 0.09048999999999996, -32.99951], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [0, 0.08999999999999997, -37], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [2.00007, 0.30007, -114.99993], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-0.9998600000000001, 0.30013999999999996, -124.99986000000001], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [1.00021, 0.30021, -114.99978999999999], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-0.9997199999999999, 0.30028, -114.99972], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [-1.99965, 0.30035, -124.99965], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-1.99958, 0.30042, -144.99958], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [0.00049, 0.30049, -124.99950999999999], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [1, 0.3, -125], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [1.00007, 0.30007, -134.99993], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [2.00014, 0.30013999999999996, -134.99986], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [0.00021, 0.30021, -114.99978999999999], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [0.00028000000000000003, 0.30028, -134.99972], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [1.00035, 0.30035, -144.99965], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [0.00042, 0.30042, -144.99958], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [-0.9995099999999999, 0.30049, -144.99951], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [2.82, 0.3, -135], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [-2.90993, 0.30007, -124.99993], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [2.87014, 0.30013999999999996, -114.99986000000001], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [1.9302099999999998, 0.30021, -144.99979], [0, 0, 0], [2, 2, 2]);
        a.re('E0', [0.49028, 0.46027999999999997, -328.91972000000004], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
