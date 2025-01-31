# Generated by Django 4.2.15 on 2024-11-12 13:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0027_serviceaccount'),
        ('auth_token', '0006_googleoauth2token'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceAccountToken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token_key', models.CharField(db_index=True, max_length=8)),
                ('digest', models.CharField(max_length=128)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('revoked_at', models.DateTimeField(null=True)),
                ('service_account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tokens', to='user_management.serviceaccount')),
            ],
            options={
                'unique_together': {('token_key', 'service_account', 'digest')},
            },
        ),
    ]
