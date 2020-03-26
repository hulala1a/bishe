const express = require('express');
const query = require('./query');
const router = express.Router();

router.get('/apis/years/:year/sexes', query.viewSex);
router.get('/apis/years', query.viewYear);
router.get('/apis/years/:year', query.viewNum);
router.get('/apis/years/:year/nations', query.viewNation);
router.get('/apis/years/:year/native_places', query.viewNativePlace);
router.get('/apis/specialties/:specialty/years/:year', query.viewSpecialty);
router.get('/apis/years/:year/reaching_points', query.viewReachingPoint);
router.get('/apis/specialties/:specialty/years/:year/classes', query.viewClass);
router.get('/apis/specialties/:specialty/years/:year/targets', query.viewTarget);
router.get('/apis/specialties/:specialty/years/:year/targets/:target', query.viewCourse);
router.get('/apis/specialties/:specialty/targets/:target/courses/:course', query.viewYearCourse);
router.get('/apis/classes/:class/years/:year/students', query.viewStudent);

module.exports = router;