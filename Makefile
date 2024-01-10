compile:
	docker compose -f docker-compose-build.yml up --build

dev:
	docker compose -f docker-compose-dev.yml up --build
